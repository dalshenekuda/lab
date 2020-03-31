#Docker
docker build -t ars/dockerars .
docker run -p 8001:8000 --rm --name dockerars ars/dockerars
