from fastapi import APIRouter

from app.schemas.chat import ChatRequest, ChatResponse
from app.services.chat_service import ChatService

router = APIRouter(prefix="/api/ask", tags=["ask"])

chat_service = ChatService()


@router.post("", response_model=ChatResponse)
def ask(payload: ChatRequest) -> ChatResponse:
    return chat_service.generate_reply(payload)
