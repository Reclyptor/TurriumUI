FROM node:lts-alpine3.12
WORKDIR /react/src
COPY . .
RUN yarn install
EXPOSE 5000 3000
ENTRYPOINT ["/bin/sh", "react.sh"]
CMD ["dev"]