from app.config import settings
from app.providers.gemini_provider import GeminiProvider
from app.prompts.ask_prompt_builder import PromptService
from app.schemas.chat import ChatRequest, ChatResponse, SourceSnippet
from app.services.retrieval_service import RetrievalService


class PortfolioService:
    def __init__(
        self,
        retrieval_service: RetrievalService | None = None,
        provider: GeminiProvider | None = None,
        prompt_service: PromptService | None = None,
    ) -> None:
        self.retrieval_service = retrieval_service or RetrievalService()
        self.provider = provider or GeminiProvider()
        self.prompt_service = prompt_service or PromptService()

    def generate_reply(self, payload: ChatRequest) -> ChatResponse:
        retrieved_docs = self.retrieval_service.retrieve(payload.message)
        if not retrieved_docs:
            retrieved_docs = self._default_portfolio_context(payload.message)
        system_instruction = self.prompt_service.build_system_instruction()
        prompt = self.prompt_service.build_user_prompt(payload.message, retrieved_docs)
        answer = self.provider.generate_answer(
            question=payload.message,
            context_docs=retrieved_docs,
            system_instruction=system_instruction,
            prompt=prompt,
        )
        used_sources = [
            SourceSnippet(
                title=doc.title,
                category=doc.category,
                excerpt=doc.content[:220].strip(),
                path=doc.path,
            )
            for doc in retrieved_docs
        ]
        return ChatResponse(
            answer=answer,
            provider=self.provider.last_provider,
            used_sources=used_sources,
        )

    def _default_portfolio_context(self, message: str):
        normalized = "".join(ch.lower() if ch.isalnum() else " " for ch in message).split()
        greeting_terms = {"hi", "hello", "hey", "yo", "greetings"}
        identity_terms = {"who", "you", "kyaw", "htet", "about", "introduce"}
        language_terms = {"language", "languages", "speak", "speaks", "fluent", "english", "burmese", "chinese"}
        role_terms = {"resume", "background", "skill", "skills", "engineer", "qualification", "qualify"}

        query_terms = set(normalized)
        if query_terms & (greeting_terms | identity_terms | language_terms | role_terms):
            seed_queries = [
                "kyaw htet overview",
                "identity and languages",
                "recruiter summary",
                "portfolio assistant overview",
            ]
            seeded_docs = []
            seen_paths = set()
            for seed in seed_queries:
                for doc in self.retrieval_service.retrieve(seed, limit=2):
                    if doc.path not in seen_paths:
                        seen_paths.add(doc.path)
                        seeded_docs.append(doc)
            return seeded_docs

        return []
