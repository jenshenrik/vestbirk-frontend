All: start-local

build:
	docker build -t vestbirk-frontend:dev .

build-prod:
	docker build -f Dockerfile-prod -t vestbirk-frontend:prod .
	docker tag vestbirk-frontend cloud.canister.io:5000/jenshenrik/vestbirk-frontend

run-prod: build-prod
	docker run -it -p 80:80 --rm vestbirk-frontend:prod

start-local: build
	docker run -d -v ${PWD}:/vestbirk/app -v /app/node_modules -p 4201:4200 --name vestbirk-frontend --rm vestbirk-frontend:dev

stop:
	docker stop vestbirk-frontend

test: start-local
	docker exec -it vestbirk-frontend ng test --watch=false
	docker exec -it vestbirk-frontend ng e2e --port 4202

