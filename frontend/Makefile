# rename all built target to include "frontend" prefix
.PHONY: frontend-build frontend-run frontend-remove-image frontend-remove-container frontend-deploy

DOCKER_IMAGE = "astro"

# build astro docker image
frontend-build:
	@echo "Building astro docker image"
	docker build -t $(DOCKER_IMAGE) -f docker/frontend/Dockerfile.prod .
	@echo "Astro docker image build successfully"
	@echo "----------------------------------------------------"

# run astro docker image
frontend-run:
	@echo "Running astro docker image"
	docker run -d -p 3000:3000 --env-file .env.production --name $(DOCKER_IMAGE) $(DOCKER_IMAGE)
	@echo "Astro docker image running successfully"
	@echo "----------------------------------------------------"

# remove astro docker image
frontend-remove-image:
	@echo "Removing untagged docker image"
	docker image prune -f
	@echo "Untagged docker image removed successfully"
	@echo "----------------------------------------------------"

	@echo "Removing astro docker image"
	@if docker images $(DOCKER_IMAGE) -q 2> /dev/null; then \
		docker rmi $(DOCKER_IMAGE) -f; \
		echo "Docker image $(DOCKER_IMAGE) removed"; \
	else \
		echo "Docker image $(DOCKER_IMAGE) does not exist"; \
	fi
	@echo "----------------------------------------------------"

# docker stop container and remove it if it exists
frontend-remove-container:
	@if docker ps -a | grep $(DOCKER_IMAGE) > /dev/null; then \
		docker stop $(DOCKER_IMAGE); \
		docker rm $(DOCKER_IMAGE); \
		echo "Docker container $(DOCKER_IMAGE) removed"; \
	else \
			echo "Docker container $(DOCKER_IMAGE) does not exist"; \
	fi
	@echo "----------------------------------------------------"

frontend-deploy:
	make frontend-remove-container && make frontend-remove-image && make frontend-build && make frontend-run
