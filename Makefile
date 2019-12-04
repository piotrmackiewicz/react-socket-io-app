build:
	cp .env client/
	docker-compose build --no-cache --force-rm
	
up:
	docker-compose up
