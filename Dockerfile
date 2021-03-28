FROM node:lts-alpine as builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --non-interactive
COPY . .
RUN yarn build

FROM node:lts-alpine
WORKDIR /app
COPY --from=builder /app/build .
COPY --from=builder /app/package.json .
RUN yarn install --prod --frozen-lockfile --non-interactive
CMD node index.js