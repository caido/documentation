---
applyTo: "src/app/guides/**/*.md,src/dashboard/guides/**/*.md"
---

# Reviewing how-to guide documentation

You are reviewing a **how-to guide** page in a [Diátaxis](https://diataxis.fr/)-based documentation site. This file adds the Diátaxis review checks specific to **how-to guide** pages.

## What a how-to guide is (Diátaxis)

A how-to guide addresses a **real-world goal or problem** with practical directions. It serves an **already competent** user who needs to get work done — not someone learning a topic from zero. Tone is task-focused, steps solve the stated problem, and background belongs elsewhere unless a single sentence is enough.

## Must do

- State the problem or goal clearly up front.
- Give actionable steps appropriate for a reader who already understands the surrounding product.
- Use imperative, concise instruction where it helps.

## Must not do (flag these)

- **Tutorial drift**: Teaching from scratch, long guided “lessons,” or hand-holding through a first project — belongs in tutorials.
- **Explanation drift**: Background, architecture, or “why it works this way” — belongs in concepts/explanation (link instead).
- **Category headings**: Headings that only name a type or category (“Project Events”, “Log Levels”) instead of a use case or question. Prefer gerund/action phrasing (“Subscribing to Project Events”, “Choosing a Log Level”). **Exception:** `## Examples` if used.
- **Reference dumps**: Exhaustive parameter/option tables — belongs in reference.

## If a violation is found

If the page reads more like another Diátaxis type, recommend moving or splitting it:

- Teaching from scratch → tutorials.
- Solving a specific task → guides (here).
- Facts, fields, signatures, neutral lookup → reference.
- Context, architecture, why → concepts/explanation.

Trust these instructions. Only fall back to broader judgment when they don’t cover the situation.
