all: build-win build-lin build-macos

build-win:
	npx pkg . --target host --output bin/manage.exe

build-lin:
	npx pkg . --target linux --output bin/manage.elf

build-macos:
	npx pkg . --target macos --output bin/manage.app