if docker ps -a --format '{{.Names}}' | grep -q "api-node"; then
    echo "Eliminando contenedor 'container-productos'..."
    docker rm -f api-node
else
    echo "El contenedor 'container-productos' no existe."
fi
          
if docker images --format '{{.Repository}}:{{.Tag}}' | grep -q "node-ncapas"; then
    echo "Eliminando imagen 'img-productos'..."
    docker rmi -f node-ncapas
else
    echo "La imagen 'img-productos' no existe."
fi