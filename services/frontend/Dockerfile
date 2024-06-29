FROM node:alpine

WORKDIR /app

COPY package.json package.json

RUN npm install

COPY . .

RUN npm run build

CMD [ "npm","run" ,"start" ]

EXPOSE 3000