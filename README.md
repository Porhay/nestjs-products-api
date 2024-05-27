<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
  <a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
  <a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
  <a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
  <a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
  <a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
  <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>

## 🎓 Requirements
Task requirements can be found [here](REQUIREMENTS)


## ✅ Check it out: https://nestjs-products-api.onrender.com
###### ▶ (note that app use free instance that spins down with inactivity that can delay first request by 50+ seconds)

## 🧩 Docs (Swagger)
###### Could be found by next URL:
```sh
$ http://localhost:8001/ # Local environment
$ https://nestjs-products-api.onrender.com # Production
```

## 🕺 Basic test case
<details>
<summary>Create a new user, add a new product and get all the products</summary>
###### 1. Create a new user
```sh
curl --location 'https://nestjs-products-api.onrender.com/api/auth/register' \
--header 'Content-Type: application/json' \
--data '{
    "username": "User1",
    "password": "123"
}'
```
###### 2. Add a new product
```sh
curl --location 'https://nestjs-products-api.onrender.com/api/products' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlVzZXIxIiwic3ViIjoiNDJiZGU1MjUtZTg3Ny00MGE3LTgyYzUtZmQyN2YzZTU2YjUzIiwiaWF0IjoxNzE2NzgyMTI0LCJleHAiOjE3MTY3ODU3MjR9.Y4qk5qipdaKaR4V6U8EKHFYZTZVH6o225L2W3mvVgZM' \
--header 'Content-Type: application/json' \
--data '{
    "name": "product11",
    "description": "some product",
    "price": 9.99,
    "category": "general"
}'
```
###### 3. Get all the products
```sh
curl --location 'https://nestjs-products-api.onrender.com/api/products' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkRlbnlzMiIsInVzZXJJZCI6IjRjMjA2MTM3LWY3OGQtNDQ4Yi05N2NhLTY3YjVjY2MyNTg5NCIsImlhdCI6MTcxNjc4MTc3NSwiZXhwIjoxNzE2Nzg1Mzc1fQ.faPvkaGY1xp1gG9iuHSSgiSXuqBpbCHUGTm3VoE4vsw'
```
</details>

## 🚀 Features
- 📱 **NestJS** — latest version
- 🎉 **TypeScript** - Type checking
- 🏪 **PostgreSQL** - Open-Source Relational Database
- 💾 **TypeORM** - Database ORM
- 🗝 **Authentication** - JWT based
- ⚙️ **Dotenv** - Supports environment variables
- 🐳 **Docker** - Container Application Development
- 📏 **ESLint** — Pluggable JavaScript linter
- 📃 **Swagger** - API Documentation
- 🔨 **Jest** - API Testing


## 🏃 Run locally
<details>
<summary>Start postgresql, install dependencies and run app</summary>

#### Requires [Node.js](https://nodejs.org/) v14+ to run and .env files provided for client and server sides.

###### 1. Make sure you have Node.js, Docker Desktop and Git installed!
###### 2. Start Docker Desktop
###### 3. Run commands from the root directory:
```sh
$ npm run start:db
$ npm run start:dev
```
###### 4. Run tests (optional):
```sh
$ npm run test
</details>

## 🔨 Database migrations
```sh
$ npm run typeorm:create-migration --name=migration_name
```


## 📃 License
Project is [MIT licensed](LICENSE)
