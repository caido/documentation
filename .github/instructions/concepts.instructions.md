---
applyTo: "src/app/concepts/**/*.md,src/dashboard/concepts/**/*.md"
---

# Reviewing explanation / concept documentation

You are reviewing an **explanation** (concept) page in a [Diátaxis](https://diataxis.fr/)-based documentation site. This file adds the Diátaxis review checks specific to **explanation** pages.

## What explanation is (Diátaxis)

Explanation provides **context and background**. It answers “why?” and helps readers understand how ideas fit together. It may include perspective and connect topics. It serves **study** (understanding), not step-by-step work — procedures and raw specs live in guides and reference.

## Must do

- **First-sentence orientation**: Immediately after the `#` page title, the very first sentence of body text must say what this article is about and what conceptual ground the reader will cover (what they will understand or how the topic fits in). Place it before any `##` heading, `::: callout`, list, image, table, or fenced code block.
- Clarify purpose early: what conceptual question this page answers.
- Link to reference for exact fields/APIs and to guides for procedures.
- Use narrative, comparison, or multiple angles where that aids understanding.

## Must not do (flag these)

- **Deferred orientation**: Starting the page with a heading, callout, list, image, table, or code before any sentence that explains what the article is about, or burying that explanation only later in the page.
- **Procedures**: Commands or numbered steps the reader is meant to run to accomplish a task — belongs in guides (or a full tutorial if teaching from scratch).
- **Reference dumps**: Exhaustive parameter tables, full field lists, or API catalogs — belongs in reference.
- **Tutorial-style walkthrough**: Building something step-by-step — belongs in tutorials.
- **Definitions-only page**: If the content is mostly specification-like lists with little narrative, it may belong in reference instead.

## If a violation is found

If the page reads more like another Diátaxis type, recommend moving or splitting it:

- Teaching from scratch → tutorials.
- Specific task how-to → guides.
- Lookup facts/specs → reference.
- Understanding / why / big picture → concepts/explanation (here).

Trust these instructions. Only fall back to broader judgment when they don’t cover the situation.
