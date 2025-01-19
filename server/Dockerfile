FROM node:18.17.0

WORKDIR /usr/app

COPY package*.json ./
RUN npm i

# Dar permisos de ejecución al script de inicio
#RUN chmod +x ./startup.sh


COPY . .

#RUN chmod +x /usr/app/src/start.sh



EXPOSE 8000

CMD ["npm", "run", "dev"]
#CMD ["bash", "start.sh", "npm run dev"]