FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm config set strict-ssl false && npm install --production

COPY index.js ./

EXPOSE 80

CMD ["npm", "start"]
