FROM node:18.16.1-alpine3.14

WORKDIR /usr/src/app


COPY package*.json ./


RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 3333

CMD [ "npm", "start" ]