include ./frontend/Makefile
include ./backend/Makefile

.PHONY: pull backend frontend

pull:
	@echo "Pulling latest changes from main branch"
	git pull origin main	# pull latest changes from main branch
	@echo "Latest changes pulled successfully"
	@echo "----------------------------------------------------"

backend:
	$(MAKE) -f ./backend/Makefile upload-payload-image

frontend:
	$(MAKE) -f ./frontend/Makefile upload-astro-image

run-backend:
	$(MAKE) -f ./backend/Makefile run-payload-image

run-frontend:
	$(MAKE) -f ./frontend/Makefile run-astro-image

run:
	$(MAKE) -f ./Makefile run-backend
	$(MAKE) -f ./Makefile run-frontend