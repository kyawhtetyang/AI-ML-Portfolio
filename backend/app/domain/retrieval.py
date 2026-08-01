from __future__ import annotations

from dataclasses import dataclass


@dataclass
class RetrievedDocument:
    title: str
    category: str
    path: str
    content: str
    score: int
