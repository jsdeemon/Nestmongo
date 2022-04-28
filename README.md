## Starter Nest + Mongo + Docker + Swagger

### How to run mongDB in Docker 
```bash
$ docker-compose up
$ docker-compose up -d
$ docker-compose stop
$ docker-compose down
```
Connect to MongoDB: 
Username: root
Password: rootpassword
```
$ mongo admin -u root -p rootpassword
```
### Quick tips for mongoDB:
Show databases:
```bash
show dbs
```
Create new non-existant database:
```bash
use mydatabase
```
Show collections:
```bash
show collections
```
Show contents of a collection:
```bash
db.your_collection_name.find()
```
Save a data to a collection:
```bash
db.your_collection_name.save({"name":"Sony AK"})
```
Show database version:
```bash
db.version()
```
Exit database:
```bash
exit
```
<p align="">Here you can see Swagger documentation
  <a href="http://localhost:5000/api/docs" target="blank">http://localhost:5000/api/docs</a>
</p>



## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
