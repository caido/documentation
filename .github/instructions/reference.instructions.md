---
applyTo: "src/app/reference/**/*.md,src/dashboard/reference/**/*.md"
---

# Reviewing reference documentation

You are reviewing a **reference** page in a [Diátaxis](https://diataxis.fr/)-based documentation site. This file adds the Diátaxis review checks specific to **reference** pages.

## What reference is (Diátaxis)

Reference material is **neutral technical description**: facts the user needs to use things correctly — accurate, complete, and organized for **lookup**. It is not concerned with the user’s current task. Structure should mirror the thing being described (e.g. same conceptual groupings as the product surface area).

## Must do

- **First-sentence orientation**: Immediately after the `#` page title, the very first sentence of body text must say what this article documents and what information the reader can look up here. Place it before any `##` heading, `::: callout`, list, image, table, or fenced code block.
- Present facts (fields, defaults, constraints, edge cases) clearly and consistently.
- Use stable headings and grouping so readers can scan and find entries quickly.
- Keep structural patterns consistent across similar entries.

## Must not do (flag these)

- **Deferred orientation**: Starting the page with a heading, callout, list, image, table, or code before any sentence that explains what the article is about, or burying that explanation only later in the page.
- **Opinion or persuasion**: “we recommend…”, “you should…”, narrative justification — not reference.
- **Tutorial framing**: “Let’s build…”, “First we will…” walkthroughs — belongs in tutorials.
- **Step-by-step tasks**: Procedural “how to configure X” content — belongs in guides.
- **Explanation drift**: Motivation, background, “why”, conceptual discussion — belongs in concepts/explanation.

## If a violation is found

If the page reads more like another Diátaxis type, recommend moving or splitting it:

- Teaching from scratch → tutorials.
- Task-oriented procedure → guides.
- Neutral facts/specs → reference (here).
- Why / context / architecture → concepts/explanation.

Trust these instructions. Only fall back to broader judgment when they don’t cover the situation.
