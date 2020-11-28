FROM alpine:latest

RUN apk add --no-cache \
  tzdata \
  build-base \
  nodejs \
  python3 \
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
RUN npm install react-scripts@4.0.1 -g
