# rename all built target to include "backend" prefix
.PHONY: login-payload-ecr build-payload-image tag-payload-image run-payload push-payload-image upload-payload-image

DOCKER_BACKEND_IMAGE = "payload"
TAG_DOCKER_BACKEND_IMAGE = "934604147792.dkr.ecr.us-east-1.amazonaws.com/$(DOCKER_BACKEND_IMAGE):latest"

login-payload-ecr:
	@echo "Login to AWS ECR"
	aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 934604147792.dkr.ecr.us-east-1.amazonaws.com
	@echo "Login to AWS ECR successfully"
	@echo "----------------------------------------------------"

build-payload-image:
	@echo "Building docker image"
	docker build --platform linux/amd64 -t $(DOCKER_BACKEND_IMAGE) -f docker/backend/Dockerfile.prod ./backend
	@echo "Docker image build successfully"
	@echo "----------------------------------------------------"

tag-payload-image:
	@echo "Tagging docker image"
	docker tag $(DOCKER_BACKEND_IMAGE):latest $(TAG_DOCKER_BACKEND_IMAGE) 
	@echo "Docker image tagged successfully"
	@echo "----------------------------------------------------"

push-payload-image:
	@echo "Pushing docker image"
	docker push $(TAG_DOCKER_BACKEND_IMAGE)
	@echo "Docker image pushed successfully"
	@echo "----------------------------------------------------"

upload-payload-image:
	@echo "Uploading docker image to ECR"
	make login-payload-ecr && make build-payload-image && make tag-payload-image && make push-payload-image
	@echo "Docker image uploaded successfully"
	@echo "----------------------------------------------------"

# ----------------------------------------------------------------------------------------------------------------

pull-payload-image:
	@echo "Pulling docker image"
	docker pull $(TAG_DOCKER_BACKEND_IMAGE)
	@echo "Docker image pulled successfully"
	@echo "----------------------------------------------------"

run-payload-image:
	@echo "Running docker image"
	docker run -d -p 3001:3001 --env-file ./backend/.env --name $(DOCKER_BACKEND_IMAGE) $(TAG_DOCKER_BACKEND_IMAGE)
	@echo "Docker image running successfully"
	@echo "----------------------------------------------------"

deploy-payload:
	@echo "Deploying payload"
	make login-payload-ecr && make pull-payload-image && make run-payload-image
	@echo "Payload deployed successfully"
	@echo "----------------------------------------------------"