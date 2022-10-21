FROM node:14 as build

WORKDIR /usr/spa

COPY ./package.json ./

RUN npm install

COPY . .

RUN npm run build


FROM nginx:latest

COPY ./nginx.conf /etc/nginx/templates/default.conf.template

COPY --from=build /usr/spa/build ./usr/public

EXPOSE 80