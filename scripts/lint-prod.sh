#!/usr/bin/env bash
set -e

# Lint JS
ESLINT_ENV=production eslint -c ./eslint.config.mjs --max-warnings 0 --fix ./.vitepress ./src