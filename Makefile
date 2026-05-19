lint:
	pnpm lint

install:
	pnpm install

build-release: install
	pnpm build

check-links:
	lychee --config .lychee.toml --root-dir "$(shell pwd)/src" 'src/**/*.md'

download-linter:
	npm install markdownlint-cli2 --global
