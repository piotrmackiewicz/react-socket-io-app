FROM node:12.13.0-alpine

WORKDIR /server

ENV PATH /client/node_modules/.bin:$PATH

COPY package*.json /server/
RUN npm install

EXPOSE 5000

CMD [ "npm", "start" ]
