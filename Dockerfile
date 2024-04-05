FROM node:21-alpine

WORKDIR /app/frontend

COPY ./frontend ./

RUN npm install

RUN npm run build

WORKDIR /app/backend

COPY ./backend .

RUN npm install

CMD ["npm","run","start"]