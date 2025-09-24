#!/usr/bin/env bash
set -e

# Lint JS
eslint -c ./eslint.config.mjs --max-warnings 0 --fix ./.vitepress ./src