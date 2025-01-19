FROM node:18.17.0

WORKDIR /usr/app

COPY package*.json ./
RUN npm i
COPY . .
#RUN chmod +x /usr/app/src/start.sh
EXPOSE 8000

CMD ["npm", "run", "dev"]
#CMD ["bash", "start.sh", "npm run dev"]