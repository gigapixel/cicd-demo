FROM node:lts-alpine
WORKDIR /app
COPY package*.json .
# Run `npm ci` _before_ copying the application in
RUN npm install --omit=dev
# If any file in `dist` changes, this will stop Docker layer caching
COPY ./dist ./dist
ENV NODE_ENV=production
ENV PORT=80
EXPOSE ${PORT}
CMD node dist/index.js
