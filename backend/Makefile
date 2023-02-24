# create Makefile that run git pull from main branch and run dockerfile build image of docker/Dockerfile.prod and run that docker image
# port 3001 is used for payload container
# docker run in detach, "it" mode with env file at .env with container name "payload"
# run this command in terminal to run this Makefile
# make pull
# make build
# make run

.PHONY: pull build run remove-image	# make build	# build docker image

DOCKER_IMAGE = "payload"

pull:
	@echo "Pulling latest changes from main branch"
	git pull origin main	# pull latest changes from main branch
	@echo "Latest changes pulled successfully"

build:
	@echo "Building docker image"
	docker build -t $(DOCKER_IMAGE) -f docker/Dockerfile.prod . --no-cache
	@echo "Docker image build successfully"
	
run:
	@echo "Running docker image"
	docker run -d -p 3001:3001 --env-file .env --name $(DOCKER_IMAGE) $(DOCKER_IMAGE)
	@echo "Docker image running successfully"
	
remove-image:
	@if docker images $(DOCKER_IMAGE) -q 2> /dev/null; then \
			docker rmi $(DOCKER_IMAGE); \
			echo "Docker image $(DOCKER_IMAGE) removed"; \
	else \
			echo "Docker image $(DOCKER_IMAGE) does not exist"; \
	fi

deploy:
	make pull && make remove-image && make build && make run