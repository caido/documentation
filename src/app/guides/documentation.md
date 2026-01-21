---
description: "A step-by-step guide to contributing to Caido's open-source documentation including setup, style guidelines, and pull request submission process."
---

# Contributing to the Documentation

Caido's documentation is [open source](https://github.com/caido/documentation) and is open to community member contributions.

::: info
You will need a [Github](https://github.com) account, [Git](https://git-scm.com/downloads), and the [pnpm](https://pnpm.io/installation) package manager.
:::

## Creating a Workspace

To contribute to the documentation, first [fork the repository](https://docs.github.com/en/get-started/app/quickstart/fork-a-repo) and create a clone.

```bash
git clone https://github.com/<username>/documentation
```

Then, navigate into the directory and create a new branch.

```bash
cd documenation && git branch -b <branch-name>
```

## Style Guidelines

- Pages are primarily written in Markdown, although HTML can be used as well.
- Ensure to always link pages in the correct sidebar by editing the `.vitepress/sidebars` file.
- Button icons are sourced from the [FontAwesome Classic Solid](https://fontawesome.com/search?f=classic&s=solid&o=r) collection.

::: tip
To serve the documentation locally and view edits live run `pnpm dev`.
:::

## Publishing

When you are finished editing, commit the changes and push them to your fork.

```bash
git add . && git commit -m "<description>" && git push
```

Then, open a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) on the [documentation repository](https://github.com/caido/documentation).

::: info
To contribute, you must sign the Contributor License Agreement which will be available as a link within the pull request.
:::

Your pull request will await and undergo review. You will be notified of any requested changes and its status. Once the changes are merged, you work will appear in the official documentation.

<center>
  <h2>Thank you for contributing!</h2>
</center>
