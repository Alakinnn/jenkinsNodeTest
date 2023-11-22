FROM node:18

# Optional but recommended
WORKDIR /app

COPY package.json .

RUN npm install

# RUN if [ "$NODE_ENV" = "development" ];  \
#     then npm install; \
#     else npm install --only=production; \
#     fi

COPY . ./

CMD ["npm", "run", "start"]