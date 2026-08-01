from app.config import settings
from app.providers.gemini_provider import GeminiProvider
from app.schemas.chat import ChatRequest, ChatResponse, SourceSnippet
from app.prompts.ask_prompt_builder import PromptService
from app.services.portfolio_service import PortfolioService
from app.services.research_service import ResearchService
from app.services.retrieval_service import RetrievalService


class ChatService:
    def __init__(
        self,
        retrieval_service: RetrievalService | None = None,
        provider: GeminiProvider | None = None,
        prompt_service: PromptService | None = None,
    ) -> None:
        self.retrieval_service = retrieval_service or RetrievalService()
        self.provider = provider or GeminiProvider()
        self.prompt_service = prompt_service or PromptService()
        self.portfolio_service = PortfolioService(
            retrieval_service=self.retrieval_service,
            provider=self.provider,
            prompt_service=self.prompt_service,
        )
        self.research_service = ResearchService(
            retrieval_service=self.retrieval_service,
            provider=self.provider,
            prompt_service=self.prompt_service,
        )

    def generate_reply(self, payload: ChatRequest) -> ChatResponse:
        mode = (payload.mode or "chat").strip().lower()
        if mode == "chat":
            return self._generate_quick_chat(payload)
        if mode == "research":
            return self.research_service.generate_reply(payload)
        return self.portfolio_service.generate_reply(payload)

    def _generate_quick_chat(self, payload: ChatRequest) -> ChatResponse:
        answer = self.provider.generate_text(
            system_instruction=self.prompt_service.build_quick_chat_system_instruction(),
            prompt=self.prompt_service.build_quick_chat_prompt(payload.message),
            fallback=(
                "Quick Chat is ready, but a live LLM answer is not available right now. "
                "Add a provider key to enable general AI chat responses."
            ),
        )
        return ChatResponse(
            answer=answer,
            provider=self.provider.last_provider,
            used_sources=[],
        )
