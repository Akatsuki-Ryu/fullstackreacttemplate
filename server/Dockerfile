# Stage 1
FROM node:10 as react-buildbackend
WORKDIR /app
COPY . ./
EXPOSE 3001

CMD ["npm", "start"]


#
## Stage 2 - the production environment
#FROM nginx:alpine
#COPY nginx.conf /etc/nginx/conf.d/default.conf
#COPY --from=react-buildbackend /app /usr/share/nginx/html
#EXPOSE 81
#CMD ["nginx", "-g", "daemon off;"]
