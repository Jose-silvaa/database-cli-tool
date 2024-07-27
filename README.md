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


<h3>Installation</h3>

```bash
git clone https://github.com/Jose-silvaa/database-cli-tool.git
cd src
npm install

``````

<h3>Running the Project</h3>

<p>Navigate to the src directory</p>


```bash
cd src
````

Start the application:

```bash
node index.js -h localhost -p [Database port] -u [Database user] -P [Database password] -d [Database name]
````

<h2>Arguments</h2>

<li> -h : The hostname of the database (default is localhost).</li>
<li> -p : The port number on which the database is running.</li>
<li> -u : The username that has permission to access the database.</li>
<li> -P : The password associated with the database user.</li>
<li> -d : The name of the database you want to connect to.</li>


## Licença

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
