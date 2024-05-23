MDBOOK_VERSION = 0.4.37

lint:
	pnpm lint

build-release:
	pnpm build

download-linter:
	npm install markdownlint-cli2 --global
