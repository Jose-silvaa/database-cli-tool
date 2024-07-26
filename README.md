# Database Cli (Command-line interface) Tool

![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

## Description

A command-line tool for interacting with databases, 
providing an easy way to connect and manage various database operations

<h3>Prerequisites</h3>

- [NodeJS](https://github.com/)
- [Git](https://github.com)
- [Postgres](https://www.postgresql.org/)


<h3>Cloning</h3>

```bash
git clone https://github.com/Jose-silvaa/database-cli-tool.git
```

<h3>Starting</h3>

```bash
npm install
cd src

node index.js -h localhost -p [Database port] -u [Database user] -P [Database password] -d [Database name]

``````

```bash
[Database port] --> The port number on which the database is running.
[Database user] --> The username that has permission to access the database.
[Database password] --> The password associated with the database user.
[Database name] --> The name of the database you want to connect to.
````

## Licença

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
