FROM node:13.8

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 9000

ENTRYPOINT ["npm", "run-script", "serve"]