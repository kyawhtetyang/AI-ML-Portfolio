2026-08-01
ResearchFlow AI - Going Beyond RAG
Project Diary

After finishing RAG Knowledge Assistant, I started thinking about the next question: if RAG helps answer from documents, then how do research-oriented AI products work when the task is bigger than one retrieval step?

That curiosity led me toward agentic research systems. I kept thinking about tools like Perplexity and similar research assistants: how do they move from a question to a plan, then to source collection, then to synthesis, and finally to a readable answer with evidence?

That became the starting point for ResearchFlow AI.

Instead of building another retrieval-only assistant, I wanted to build a system that feels closer to a research workflow:

question
-> planning
-> search
-> source ranking
-> analysis
-> report generation
-> workflow trace
-> stored result

The goal was not to copy another product exactly. The goal was to understand the architecture underneath a research-style AI experience and build my own version from first principles.

ResearchFlow AI became a multi-step FastAPI + PostgreSQL project with a standalone frontend, stored research jobs, source cards, workflow steps, and report-style outputs. It also became useful beyond itself because it now powers the Ask experience inside my portfolio.

This project taught me an important difference between RAG and research orchestration.

RAG is mainly about grounded retrieval and answer construction from known sources. Research orchestration adds another layer: deciding what to look for, collecting external evidence, comparing sources, shaping findings, and presenting a structured result instead of only a direct answer.

That shift changed the engineering work too. I had to think more about:
- job lifecycle instead of only request/response
- source quality and ranking instead of only retrieval relevance
- workflow visibility so the user can see planner, search, analysis, and report steps
- output formatting so the result feels like a research brief instead of raw chat text
- deployment constraints so the system can run in a practical hosted setup

One of the most useful parts was realizing that a recruiter-facing AI project should not only “work” technically. It should also show product thinking clearly. I spent time improving the chat-first UI, source presentation, workflow labels, reply visibility, and the balance between quick answers and deeper research runs.

Another useful lesson came from the production path. The original direction could have grown into a more complicated service split, but I simplified the architecture so research jobs can run from the web service path instead of depending on a separate paid worker setup. That made the project easier to ship and easier to explain.

ResearchFlow AI also gave me a stronger understanding of what I want to learn next in AI engineering. I do not only want to build single-model demos. I want to build systems where retrieval, orchestration, reasoning structure, UI clarity, storage, and deployment all work together as one product.

This project now represents a step beyond my RAG work. RAG Knowledge Assistant taught me how grounded retrieval systems operate. ResearchFlow AI taught me how to turn that foundation into a broader research workflow with planning, evidence gathering, synthesis, and user-facing structure.

Skills gained: agentic workflow design, research orchestration, source evaluation, report generation patterns, FastAPI product architecture, chat UX iteration, deployment simplification, and recruiter-facing AI product thinking.
