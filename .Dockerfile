FROM node:lts-alpine3.12 AS BUILDENV
WORKDIR /react/src
COPY . .
RUN yarn install
RUN yarn build

FROM node:lts-alpine3.12
WORKDIR /home
COPY --from=BUILDENV /react/src/build /home
RUN yarn global add serve
EXPOSE 5000
CMD ["serve", "-s", "."]