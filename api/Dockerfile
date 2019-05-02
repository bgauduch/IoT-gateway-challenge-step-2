FROM node:12-alpine

# Install app dependencies
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install

# Bundle app source
COPY . /usr/src/app

# expose app port 
EXPOSE 8080

# runtime
ENTRYPOINT [ "npm", "start" ]