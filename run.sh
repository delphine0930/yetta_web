docker stop yettaweb
docker rm -f yettaweb
docker rmi yettaweb
docker build -f dockerfile -t yettaweb .
docker run -d -it -p 80:3000 --name yettaweb yettaweb
