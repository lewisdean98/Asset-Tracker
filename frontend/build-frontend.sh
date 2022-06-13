#Compile react files
cd src
expo build:web

#Copy html files to server
cd ..
rm -rf apache/html-files
mv src/web-build apache/html-files
