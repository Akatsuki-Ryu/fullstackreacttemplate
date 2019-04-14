## Stage 1
#FROM node:8 as react-buildbackend
#WORKDIR /app
#COPY . ./
#EXPOSE 3001
#
#CMD ["npm", "start"]


#
## Stage 2 - the production environment
#FROM nginx:alpine
#COPY nginx.conf /etc/nginx/conf.d/default.conf
#COPY --from=react-buildbackend /app /usr/share/nginx/html
#EXPOSE 81
#CMD ["nginx", "-g", "daemon off;"]


FROM node:8

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install dependencies
COPY package.json .
RUN npm install

# Bundle app source
COPY . .

# Exports
EXPOSE 3001
#RUN npm start
CMD ["npm", "run","start-dev"]

