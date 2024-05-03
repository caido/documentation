MDBOOK_VERSION = 0.4.37
MDBOOK_PAGETOC_VERSION = 0.2.0

build:
	mdbook build

run:
	mdbook serve

lint:
	markdownlint-cli2 "**/*.md"

build-release:
	./bin/mdbook build

download-mdbook: download-mdbook-pagetoc
	mkdir -p bin
	curl -L https://github.com/rust-lang/mdBook/releases/download/v$(MDBOOK_VERSION)/mdbook-v$(MDBOOK_VERSION)-x86_64-unknown-linux-musl.tar.gz | tar xvz -C ./bin
	chmod +x ./bin/mdbook

download-mdbook-pagetoc:
	mkdir -p bin
	curl -L https://github.com/slowsage/mdbook-pagetoc/releases/download/v$(MDBOOK_PAGETOC_VERSION)/mdbook-pagetoc-v$(MDBOOK_PAGETOC_VERSION)-x86_64-unknown-linux-gnu.tar.gz | tar xvz -C ./bin
	chmod +x ./bin/mdbook-pagetoc

download-linter:
	npm install markdownlint-cli2 --global
