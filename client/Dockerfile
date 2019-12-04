FROM node:12.13.0-alpine

WORKDIR /client

ENV PATH /client/node_modules/.bin:$PATH

COPY package*.json /client/
RUN yarn install
RUN npm install react-scripts@3.2.0 -g

EXPOSE 3000

CMD ["npm", "start"]
