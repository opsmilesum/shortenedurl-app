## Developer Guide
We use `React + Relay + Postgresql + Java + SpringBoot`.This guide is to help you 
run the App on your local environment. 
You can also refer the  [design doc](https://github.com/opsmilesum/shortenedurl-app/blob/master/TechDesign.pdf) for the implementation details.

## Installation
### Install and Start PostgreSql
```shell script
brew install postgresql
initdb /usr/local/var/postgres
pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start
createdb shortened_url
```

### Install Node
```shell script
brew install Node
npm install
npm install webpack     
npm install webpack-dev-server    
npm install webpack-cli
```

## Run
## Backend
Run `ShortenedUrlApplication`

## Frontend
```shell script
yarn start
```

## Access Website
After running the above command, you shall see the Web on your `http://localhost:3000/`.
![index](https://raw.githubusercontent.com/opsmilesum/shortenedurl-app/master/public/Index.jpg)


