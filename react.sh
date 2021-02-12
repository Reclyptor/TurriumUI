#! /bin/sh

function development {
    echo "RUNNING IN DEVELOPMENT MODE."
    yarn start && exit $?
}

function production {
    echo "RUNNING IN PRODUCTION MODE."
    yarn build && yarn global add serve && serve -s build && exit $?
}

case $1 in
  dev | development)
    development
  ;;
  prod | production)
    production
  ;;
  *)
    development
  ;;
esac
