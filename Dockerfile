FROM node:8.11.1
MAINTAINER Sai Kumar Adepu
RUN mkdir /app
WORKDIR /app
ADD ./package.json /app/package.json
RUN yarn install
ADD . /app