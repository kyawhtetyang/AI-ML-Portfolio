from app.config import settings
from app.providers.gemini_provider import GeminiProvider
from app.schemas.chat import ChatRequest, ChatResponse, SourceSnippet
from app.services.prompt_service import PromptService
from app.services.retrieval_service import RetrievalService


class ResearchService:
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
        system_instruction = self.prompt_service.build_research_system_instruction()
        prompt = self.prompt_service.build_research_prompt(payload.message, retrieved_docs)
        answer = self.provider.generate_text(
            system_instruction=system_instruction,
            prompt=prompt,
            fallback=(
                "Deep Research mode is available, but this portfolio version does not run full live web research inside the site yet. "
                "Use ResearchFlow AI for a deeper external research workflow with sources and reports."
            ),
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
