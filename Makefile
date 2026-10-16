.PHONY: setup dev test lint build

setup:
	npm ci
	pre-commit install

dev:
	npm run dev

test:
	npm run test

lint:
	npm run lint

build:
	npm run build
