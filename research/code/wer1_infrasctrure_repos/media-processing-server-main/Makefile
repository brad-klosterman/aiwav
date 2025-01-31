# Makefile to simplify some of the common commands.
# 	Goal: maintain reasonable cross-platform capability between:
# 		- MacOS,
# 		- WSL on Windows and
# 		- native Linux
.DEFAULT_GOAL := help

# General Variables
project := $(shell basename `pwd`)
workspace := "$(env)"
container := $(project)
docker-filecheck := /.dockerenv
docker-warning := ""
env-resources := ""
# AWS Account Profile
export AWS_PROFILE=wer1
export DOPPLER_TOKEN=$(shell doppler configure get token --plain)

# Docker Warning
ifeq ("$(wildcard $(docker-filecheck))","")
	docker-warning = "⚠️  WARNING: Can't find /.dockerenv - it's strongly recommended that you run this from within the docker container."
endif

# Targets
help:
	@echo "Docker-Helper functions for building & running the $(project) container(s)"
	@echo "---------------------------------------------------------------------------------------------"
	@echo "Targets:"
	@echo "  Docker Targets (run from local machine)"
	@echo "   - up     : brings up the container(s) & attach to the default container ($(default-container))"
	@echo "   - down   : stops the container(s)"
	@echo "   - build  : (re)builds the container(s)"
	@echo "  Service Targets (should only be run inside the docker container)"
	@echo "   - run    : run the service"
	@echo "   - deploy : deploy the service"
	@echo ""
	@echo "Options:"
	@echo " - env    : sets the environment - supported environments are: global | dev | prod"
	@echo ""
	@echo "Examples:"
	@echo " - Start Docker Container            : make up"
	@echo " - Rebuild Docker Container          : make build"
	@echo " - Rebuild & Start Docker Container  : make build up"

set-credentials:
	@echo "🚀 Validating the environment..."
	@# HACK: This is needed for WSL on Windows 10, since WSL has no way to map ~/.aws into a docker container,
	@#       as the ~ folder in WSL seems to be inaccessible to Docker for Windows
	@# TODO: Find a better way.
	@rsync -rup ~/.aws .
up: set-credentials down docker-network-required
	@echo "🚀 Starting containers..."
	@docker compose up -d
	@echo "🚀 Attaching shell..."
	@docker compose exec $(container) bash 
shell: set-credentials
	@echo "🚀 Attaching shell..."
	@docker compose exec $(container) bash

down: set-credentials docker-network-required
	@echo "🚀 Stopping containers..."
	@docker compose down
build: set-credentials down
	@echo "🚀 Building containers..."
	@docker compose build
generate: 
	@echo "🚀 (RE)Generating Typedefs..."
	pnpm generate

pnpm: 
	@echo "🚀 Doing base pnpm install..."
	@pnpm install

run: pnpm
	@echo "🚀 Starting the $(project) service..."
	pnpm dev

run-local: pnpm
	@echo "🚀 Starting the $(project) service..."
	pnpm dev:local

deploy: pnpm lint test compile apply-only
	@echo "🚀 Deployed the $(project) service!"

compile: pnpm lint 
	@echo "🚀 Compiling the $(project) service..."
	@pnpm compile_esbuild
	@pnpm zip

test: pnpm 
	@echo "🚀 Testing the $(project) service..."
	@echo "📓 Using -maxWorkers=50% as per https://dev.to/vantanev/make-your-jest-tests-up-to-20-faster-by-changing-a-single-setting-i36"
	pnpm jest --maxWorkers=50%

test-watch: pnpm 
	@echo "🚀 Testing the $(project) service..."
	@echo "📓 Using -maxWorkers=25% as per https://dev.to/vantanev/make-your-jest-tests-up-to-20-faster-by-changing-a-single-setting-i36"
	pnpm jest --watch --maxWorkers=25%

lint: pnpm 
	@echo "🚀 Checking Linting..."
	@pnpm eslint --max-warnings=0 ./src

lint-autofix: pnpm 
	@echo "🚀 Checking Linting and Fixing Issues..."
	@pnpm eslint --fix --max-warnings=0 ./src

typecheck: pnpm
	@echo "🚀 Typechecking all .ts files..."
	@pnpm typecheck

check: test lint typecheck 
	@echo "🚀 Full check..."

docker-check:
	$(call assert-file-exists,$(docker-filecheck), This step should only be run from Docker. Please run `make up` first.)

env-check:
	$(call assert, env, No environment set. Supported environments are: [ dev | prod ]. Please set the env variable. e.g. `make env=dev plan`)

docker-network-required:
		@if [ ! "$$(docker network ls | grep wer1)" ]; then \
			echo "Creating Docker Network wer1 ..." ;\
			docker network create wer1 ;\
		else \
			echo "Docker Network wer1 exists." ;\
		fi

