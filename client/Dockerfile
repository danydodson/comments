FROM node:alpine as builder

WORKDIR /usr/src/app

COPY package.json .

RUN yarn

COPY . .

RUN yarn build

FROM nginx

COPY --from=builder /usr/src/app/ /usr/share/nginx/html