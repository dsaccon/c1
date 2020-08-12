FROM alpine:latest

RUN apk add --no-cache \
  build-base \
  tzdata \
  nodejs \
  npm

# set working directory
RUN mkdir /app
WORKDIR /app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV NODE_PATH=/app/node_modules
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install react-scripts@3.4.2 -g
