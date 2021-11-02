FROM node:14.15.4-alpine

EXPOSE 3000

ARG APP_DIR=/var/www/app

COPY src $APP_DIR/src
COPY db $APP_DIR/db
COPY package.json $APP_DIR/package.json
COPY package-lock.json $APP_DIR/package-lock.json
COPY tsconfig.json $APP_DIR/tsconfig.json
COPY entrypoint.sh $APP_DIR/entrypoint.sh

WORKDIR $APP_DIR

RUN npm i
ENTRYPOINT ["./entrypoint.sh"]
