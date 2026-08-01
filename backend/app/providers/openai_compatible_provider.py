from __future__ import annotations

import json
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen

from app.config import settings


class OpenAICompatibleProvider:
    @property
    def is_configured(self) -> bool:
        return bool(
            settings.openai_compatible_api_key
            and settings.openai_compatible_base_url
            and settings.openai_compatible_model
        )

    @property
    def provider_label(self) -> str:
        return f"openai-compatible:{settings.openai_compatible_model or 'unknown'}"

    def generate_text(self, system_instruction: str, prompt: str) -> str | None:
        if not self.is_configured:
            return None

        base_url = settings.openai_compatible_base_url.rstrip("/")
        if not base_url.endswith("/v1"):
            base_url = f"{base_url}/v1"

        payload = {
            "model": settings.openai_compatible_model,
            "messages": [
                {"role": "system", "content": system_instruction},
                {"role": "user", "content": prompt},
            ],
            "temperature": 0.4,
        }
        request = Request(
            url=f"{base_url}/chat/completions",
            data=json.dumps(payload).encode("utf-8"),
            headers={
                "Content-Type": "application/json",
                "Authorization": f"Bearer {settings.openai_compatible_api_key}",
            },
            method="POST",
        )

        try:
            with urlopen(request, timeout=20) as response:
                parsed = json.loads(response.read().decode("utf-8"))
        except (HTTPError, URLError, TimeoutError, json.JSONDecodeError):
            return None

        choices = parsed.get("choices", [])
        if not choices:
            return None

        message = choices[0].get("message", {})
        content = message.get("content")
        if isinstance(content, str):
            text = content.strip()
            return text or None

        if isinstance(content, list):
            text_parts = []
            for part in content:
                if isinstance(part, dict) and part.get("type") == "text" and part.get("text"):
                    text_parts.append(part["text"].strip())
            joined = "\n".join(part for part in text_parts if part)
            return joined or None

        return None
