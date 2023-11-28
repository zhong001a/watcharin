
FROM node:18

WORKDIR /app

# ทำการ copy file package.json จากเครื่อง local เข้ามาใน container
COPY package.json ./

# ทำการลง dependency node
RUN npm install

# copy file index.js เข้ามาใน container
COPY app.js ./

# ทำการปล่อย port 8000 ออกมาให้ access ได้
EXPOSE 8000

# กำหนด command สำหรับเริ่มต้น run application (ตอน run container)
CMD ["node", "app.js"]