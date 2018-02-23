FROM dockerhub.raksan.in/commons/meteor:phantomn9
COPY build/ /home/meteor/www
RUN chown -R meteor:meteor /home/meteor/

#HOW TO Build
#sudo docker build -t harishreddy/smart:v1 .
#HOW TO RUN
#docker run -p 4000:3000 -e PORT=3000
# -e ROOT_URL=http://10.0.2.185:4000 -e MONGO_URL=mongodb://10.0.2.185:27017/frepo
# -e S3_URI="s3://fieldrepo-dev/settings-dev.json" -e S3_KEY=AKIAJIYSDDPF63QQNKEQ
# -e S3_SECRET=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 -e S3_REGION=ap-south-1 dockerhub.raksan.in/fieldeagles/fieldrepo:ui
#
