FROM nginx:alpine
LABEL author="Kamal rana"
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

# docker build -t nginx-angular -f nginx.dockerfile .
# docker run -p 8080:80 -v $(pwd)/dist/project-ecom:/usr/share/nginx/html nginx-angular