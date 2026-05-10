.DEFAULT_GOAL := help
.PHONY: help html server serve-static publish clean

help: ## List available targets
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

html: ## Build the site to public/
	hugo --minify

server: ## Run local dev server with live reload
	hugo server --bind 0.0.0.0 --baseURL http://localhost:1313/projects/

serve-static: html ## Serve the built site with Python (no live reload)
	cd public && python3 -m http.server 8000

publish: ## Push to GitHub to trigger Actions deployment
	git push origin main

clean: ## Remove build artifacts
	rm -rf public/ resources/
