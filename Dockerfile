# Stage 1: Build the Angular app with SSR
FROM node:20.12.2 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build:ssr

# Stage 2: Serve the app with Node.js
FROM node:20.12.2
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
EXPOSE 4000
CMD ["node", "dist/server/main.js"]
