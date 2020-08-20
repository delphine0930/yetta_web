docker stop yettaweb
docker rm -f yettaweb
docker rmi yettaweb
docker build -t yettaweb .
docker run -it -p 80:80 -name yettaweb yettaweb
