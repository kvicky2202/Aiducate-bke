FROM node:20-bookworm-slim

RUN apt-get update \
  && apt-get install -y python3 make g++ \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json package-lock.json ./
ENV npm_config_build_from_source=true
RUN npm ci --ignore-scripts

COPY . .
RUN npx prisma generate \
  && node scripts/ensure-prisma-client.js \
  && node scripts/rebuild-sqlite.js

ENV NODE_ENV=production
EXPOSE 10000

CMD ["npm", "start"]
