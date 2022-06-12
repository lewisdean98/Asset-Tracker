#Compile react files to html
cd oss-asset-tracker
./build-frontend.sh

#Copy html files to server
cd ..
rm -rf apache/html-files
mv oss-asset-tracker/web-build apache/html-files

#Clean up containers
docker-compose down
docker rm -f $(docker ps -a -q)
docker volume rm $(docker volume ls -q)

#Start new containers
docker-compose build
docker-compose up -d