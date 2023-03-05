# rename all built target to include "frontend" prefix
.PHONY: 

DOCKER_FRONTEND_IMAGE = "tepy.dev-astro"
TAG_DOCKER_FRONTEND_IMAGE = "934604147792.dkr.ecr.us-east-1.amazonaws.com/$(DOCKER_FRONTEND_IMAGE):latest"

login-astro-ecr:
	@echo "Login to AWS ECR"
	aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 934604147792.dkr.ecr.us-east-1.amazonaws.com
	@echo "Login to AWS ECR successfully"
	@echo "----------------------------------------------------"

build-astro-image:
	@echo "Building astro docker image"
	docker build --platform linux/amd64 -t $(DOCKER_FRONTEND_IMAGE) -f docker/frontend/Dockerfile.prod ./frontend
	@echo "Astro docker image build successfully"
	@echo "----------------------------------------------------"

tag-astro-image:
	@echo "Tagging astro docker image"
	docker tag $(DOCKER_FRONTEND_IMAGE):latest $(TAG_DOCKER_FRONTEND_IMAGE)
	@echo "Astro docker image tagged successfully"
	@echo "----------------------------------------------------"

push-astro-image:
	@echo "Pushing astro docker image"
	docker push $(TAG_DOCKER_FRONTEND_IMAGE)
	@echo "Astro docker image pushed successfully"
	@echo "----------------------------------------------------"

upload-astro-image:
	@echo "Uploading astro docker image to ECR"
	make login-astro-ecr && make build-astro-image && make tag-astro-image && make push-astro-image
	@echo "Astro docker image uploaded successfully"
	@echo "----------------------------------------------------"

# run astro docker image
pull-astro-image:
	@echo "Pulling astro docker image"
	docker pull $(TAG_DOCKER_FRONTEND_IMAGE)
	@echo "Astro docker image pulled successfully"
	@echo "----------------------------------------------------"

run-astro-image:
	@echo "Running astro docker image"
	docker run -d -p 4000:4000 --env-file ./frontend/.env.production --name $(DOCKER_FRONTEND_IMAGE) $(TAG_DOCKER_FRONTEND_IMAGE)
	@echo "Astro docker image running successfully"
	@echo "----------------------------------------------------"

deploy-astro:
	@echo "Deploying astro"
	make login-astro-ecr && make pull-astro-image && make run-astro-image
	@echo "Astro deployed successfully"
	@echo "----------------------------------------------------"
