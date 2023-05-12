FROM node:latest

WORKDIR /app
COPY ./rechner/package.json .
RUN npm install
COPY ./rechner .


EXPOSE 3000
CMD ["npm", "start"]