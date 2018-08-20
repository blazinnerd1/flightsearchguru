if [ "$1" == "client" ]; then
	echo "Rebuilding client files and restarting container..!"
    docker stop fsguru && docker rm fsguru && docker build -t fsguru . && docker run --name fsguru --network br0 -d fsguru 
elif [ "$1" == "nocontainer" ]; then
    echo "Starting new container.."
    docker build -t fsguru . && docker run --name fsguru --network br0 -d fsguru
else
	echo "Restarting container..!"
    docker stop fsguru && docker rm fsguru && docker build -t fsguru . && docker run --name fsguru --network br0 -d fsguru
fi