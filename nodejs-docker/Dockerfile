# 뼈대 작성

# 베이스 이미지를 명시해준다. 
FROM node:10

# work directory 명시
WORKDIR /user/src/app

# 
COPY ./ ./ 

# 추가적으로 필요한 파일들을 다운받는다. 
RUN npm install

# 컨테이너 시작시 실행 될 명령어를 명시해준다.
CMD ["node", "index.js"]

