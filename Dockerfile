# Use official Node image for build stage
FROM node:20 AS build

WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build -- --configuration production

# Use Nginx to serve Angular app
FROM nginx:alpine
COPY --from=build /app/dist/pharmacy-app-fe/browser /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]