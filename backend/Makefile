# rename all built target to include "backend" prefix
.PHONY: backend-build backend-run backend-remove-image backend-remove-container backend-deploy

DOCKER_IMAGE = "payload"

backend-build:
	@echo "Building docker image"
	docker build -t $(DOCKER_IMAGE) -f docker/backend/Dockerfile.prod .
	@echo "Docker image build successfully"
	@echo "----------------------------------------------------"
	
backend-run:
	@echo "Running docker image"
	docker run -d -p 3001:3001 --env-file .env --name $(DOCKER_IMAGE) $(DOCKER_IMAGE)
	@echo "Docker image running successfully"
	@echo "----------------------------------------------------"
	
backend-remove-image:
	@echo "Removing untagged docker image"
	docker image prune -f
	@echo "Untagged docker image removed successfully"
	@echo "----------------------------------------------------"

	@echo "Removing payload docker image"
	@if docker images $(DOCKER_IMAGE) -q 2> /dev/null; then \
		docker rmi $(DOCKER_IMAGE) -f; \
		echo "Docker image $(DOCKER_IMAGE) removed"; \
	else \
		echo "Docker image $(DOCKER_IMAGE) does not exist"; \
	fi
	@echo "----------------------------------------------------"

# docker stop container and remove it if it exists
backend-remove-container:
	@if docker ps -a | grep $(DOCKER_IMAGE) > /dev/null; then \
		docker stop $(DOCKER_IMAGE); \
		docker rm $(DOCKER_IMAGE); \
		echo "Docker container $(DOCKER_IMAGE) removed"; \
	else \
			echo "Docker container $(DOCKER_IMAGE) does not exist"; \
	fi
	@echo "----------------------------------------------------"	

backend-deploy:
	make backend-remove-container && make backend-remove-image && make backend-build && make backend-run

