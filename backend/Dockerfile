FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

# MANDATORY: Run migrations, then seed, then start the server
CMD ["sh", "-c", "npm run migrate && npm run seed && npm start"]