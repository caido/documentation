lint:
	pnpm lint

install:
	pnpm install

build-release: install
	pnpm build

download-linter:
	npm install markdownlint-cli2 --global
