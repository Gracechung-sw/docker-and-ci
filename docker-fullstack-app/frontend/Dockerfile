#운영 환경을 위한 Dockerfile작성

#Nginx가 제공을 해줄 Build파일들을 생성하는 단계
FROM node:alpine as builder
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build

#Nginx를 가동하고 생성된 빌드 파일들을 제공해준다. 
# 그리고 default.conf에서 해준 설정을 nginx 컨테이너 안에 있는 설정이 되게 복사를 해준다. 
FROM nginx
EXPOSE 3000 
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build  /usr/share/nginx/html


