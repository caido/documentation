---
applyTo: "src/app/tutorials/**/*.md,src/dashboard/tutorials/**/*.md"
---

# Reviewing tutorial documentation

You are reviewing a **tutorial** page in a [Diátaxis](https://diataxis.fr/)-based documentation site. This file adds the Diátaxis review checks specific to **tutorial** pages.

## What a tutorial is (Diátaxis)

A tutorial is a **lesson** that takes the learner by the hand through a practical experience. It is always practical: the user does something under guidance. The purpose is to develop skill and confidence through doing — not to deliver exhaustive facts or get a job done in production. The instructor is absent on the page, so steps must be complete, ordered, and safe to follow.

## Must do

- Present a clear learning outcome at the start (what the reader will have built or achieved).
- Use numbered steps and include working code or concrete actions at each step where relevant.
- Lead to a demonstrable result.
- Keep explanatory prose minimal; when deeper background is needed, link to a concept page instead of embedding long “why” sections.

## Must not do (flag these)

- **Reference drift**: API tables, exhaustive option lists, or neutral specification-style prose that belongs in reference documentation.
- **Long background**: Extended “why” or architecture narrative — belongs in a concept/explanation page, linked from the tutorial.
- **Incomplete paths**: Missing steps, missing code where the learner must type or paste something, or an unclear final state.
- **Competent-user framing**: Assuming the reader already knows how to wire pieces together without walking through it — that is how-to territory.

## If a violation is found

If the page reads more like another Diátaxis type, recommend moving or splitting it:

- Teaching from scratch, hands-on lesson → tutorials (here).
- Solving a specific task for someone who already knows the basics → guides.
- Facts, fields, signatures, neutral lookup → reference.
- Context, architecture, why → concepts/explanation.

Trust these instructions. Only fall back to broader judgment when they don’t cover the situation.
