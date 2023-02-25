include ./frontend/Makefile
include ./backend/Makefile

.PHONY: pull backend frontend

pull:
	@echo "Pulling latest changes from main branch"
	git pull origin main	# pull latest changes from main branch
	@echo "Latest changes pulled successfully"
	@echo "----------------------------------------------------"

backend:
	make pull && $(MAKE) -f ./backend/Makefile backend-deploy

frontend:
	make pull && $(MAKE) -f ./frontend/Makefile frontend-deploy