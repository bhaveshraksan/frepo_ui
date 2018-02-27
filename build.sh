#!/bin/bash
meteor npm install
meteor build --directory .meteor/docker/build/ --server-only
cp settings.json .meteor/docker/build/settings.json
cp Dockerfile .meteor/docker/
cd .meteor/docker
#Run docker command as non-root user.
#Run below commands once to run docker commands as non-root
#sudo groupadd docker
#sudo usermod -aG docker $USER

docker build -t dockerhub.raksan.in/fieldeagles/fieldrepo:uilocal .
# cd ../../
# docker login dockerhub.raksan.in
# docker push dockerhub.raksan.in/fieldeagles/fieldrepo:ui
