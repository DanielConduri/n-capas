if docker ps -a --format '{{.Names}}' | grep -q "api-node"; then
    echo "Eliminando contenedor 'api-node'..."
    docker rm -f api-node
else
    echo "El contenedor 'api-node' no existe."
fi
          
if docker images --format '{{.Repository}}:{{.Tag}}' | grep -q "node-ncapas"; then
    echo "Eliminando imagen 'api-node'..."
    docker rmi -f node-ncapas
else
    echo "La imagen 'node-ncapas' no existe."
fi

#npm run dev