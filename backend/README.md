# kyawhtet-portfolio backend

This backend powers the `Ask` experience for the public `Kyaw Htet` portfolio.

Current responsibilities:

- expose chat endpoints for the frontend
- read curated portfolio source documents
- retrieve matching source docs for each question
- call Gemini when `GEMINI_API_KEY` is configured
- fall back to an OpenAI-compatible provider such as DeepSeek when Gemini is unavailable
- fall back to a grounded local formatter when no live provider is available
- allow local frontend development across common Vite ports on `localhost` and `127.0.0.1`

## Run Locally

1. Create a backend env file:

```bash
cp .env.example .env
```

2. Add your provider keys in `.env`.

Recommended setup:

```bash
GEMINI_API_KEY=your_gemini_key
OPENAI_COMPATIBLE_BASE_URL=https://api.deepseek.com
OPENAI_COMPATIBLE_MODEL=deepseek-chat
OPENAI_COMPATIBLE_API_KEY=your_deepseek_key
```

3. Create and activate the project-local virtual environment:

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

4. Start the backend:

```bash
uvicorn app.main:app --reload
```

5. Optional smoke test:

```bash
python scripts/smoke_chat.py
```

## Current API

- `GET /`
- `GET /health`
- `POST /api/chat`
