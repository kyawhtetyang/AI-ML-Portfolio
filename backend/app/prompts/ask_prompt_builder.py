from app.domain.retrieval import RetrievedDocument


class PromptService:
    def build_quick_chat_system_instruction(self) -> str:
        return (
            "You are Quick Chat inside the Kyaw Htet portfolio. "
            "Answer clearly, directly, and professionally. "
            "You can explain technical concepts like a strong general AI assistant."
        )

    def build_quick_chat_prompt(self, question: str) -> str:
        return (
            f"Question:\n{question.strip()}\n\n"
            "Respond with a concise, technically helpful answer. "
            "Use plain language unless the user asks for depth."
        )

    def build_system_instruction(self) -> str:
        return (
            "You are the recruiter-facing Ask assistant for the Kyaw Htet portfolio. "
            "Answer clearly, professionally, and concisely. "
            "Stay grounded in the provided portfolio context. "
            "Focus on what the project does, the stack used, the outcome, and what it proves about the engineer."
        )

    def build_user_prompt(self, question: str, context_docs: list[RetrievedDocument]) -> str:
        context_blocks = []
        for doc in context_docs:
            context_blocks.append(
                f"Source: {doc.category}/{doc.title}\n"
                f"Path: {doc.path}\n"
                f"Content:\n{doc.content.strip()}"
            )

        joined_context = "\n\n---\n\n".join(context_blocks)
        return (
            f"Question:\n{question.strip()}\n\n"
            f"Portfolio Context:\n{joined_context}\n\n"
            "Write the answer in chat style, but keep it recruiter-friendly and grounded in the context."
        )

    def build_research_system_instruction(self) -> str:
        return (
            "You are Deep Research inside the Kyaw Htet portfolio. "
            "Answer like a compact research brief with a clear summary, evidence framing, and practical recommendation. "
            "Be transparent that this portfolio mode demonstrates research-oriented reasoning."
        )

    def build_research_prompt(self, question: str, context_docs: list[RetrievedDocument]) -> str:
        context_blocks = []
        for doc in context_docs:
            context_blocks.append(
                f"Source: {doc.category}/{doc.title}\n"
                f"Path: {doc.path}\n"
                f"Content:\n{doc.content.strip()}"
            )

        joined_context = "\n\n---\n\n".join(context_blocks)
        return (
            f"Research Question:\n{question.strip()}\n\n"
            f"Local Supporting Context:\n{joined_context}\n\n"
            "Write a short research-style answer with a brief summary and next-step recommendation. "
            "If deeper external web research would be better handled elsewhere, say so clearly."
        )
