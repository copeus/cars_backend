FROM node:12

WORKDIR /app/backend

COPY . .

RUN npm install
RUN npm run build

CMD ["npm", "start"]