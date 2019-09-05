All: start-local

build:
	docker build -t vestbirk-frontend:dev .

start-local: build
	docker run -d -v ${PWD}:/vestbirk/app -v /app/node_modules -p 4201:4200 --name vestbirk-frontend --rm vestbirk-frontend:dev

stop:
	docker stop vestbirk-frontend
