if [ "$1" == "nocontainer" ]; then
  echo ""
  docker build -t nginx . && docker run -d --name nginx -p 80:80 -p 443:443 --network br0 --restart=always nginx
else
  echo "example run $ ./resetFlights.sh "
   
fi