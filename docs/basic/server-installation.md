---
title: Server Installation
description: Install and configure Casdoor server
keywords: [Casibase server, installation, configuration]
authors: [kv-chiu]
---

## Requirements

### OS

All major operating systems including Windows, Linux and macOS are supported.

### Environment

- [Go 1.17+](https://go.dev/dl/)
- [Node.js LTS (18)](https://nodejs.org)
- [Yarn 1.x](https://classic.yarnpkg.com/en/docs/install)

:::info

The use of Casibase is divided into two steps:

- step1: [Deploy and run Casdoor](https://casdoor.org/docs/basic/server-installation)
- step2: [Deploy and run Casibase](https://casibase.org/)

We strongly suggest you use [Yarn 1.x](https://classic.yarnpkg.com/en/docs/install) to run & build Casdoor&Casibase frontend, using NPM might cause UI styling issues, see more details at: [casdoor#294](https://github.com/casdoor/casdoor/issues/294)

:::

:::caution

For **Chinese** users, in order to download the Go dependency packages successfully, you need to use a Go proxy by Configuring the GOPROXY environment variable. We strongly recommend: <https://goproxy.cn/>

:::

### Database

Casibase uses [XORM](https://xorm.io/) to talk to the database. Based on [Xorm Drivers Support](https://gitea.com/xorm/xorm#drivers-support), Casibase currently provides support for following databases:

- `MySQL`
- `MariaDB`
- `PostgreSQL`
- `CockroachDB`
- `SQL Server`
- `Oracle`
- `SQLite 3`
- `TiDB`

## Download

The source code of Casibase is hosted at GitHub: <https://github.com/casbin/casibase>. Both the Go backend code and React frontend code are inside the single repository.

Name | Description                      | Language | Source code
----|----------------------------------|----|----
Frontend | Web frontend UI for Casibase     | JavaScript + React | <https://github.com/casbin/casibase/tree/master/web>
Backend | RESTful API backend for Casibase | Golang + Beego + XORM | <https://github.com/casbin/casibase>

Casibase supports `Go Modules`. To download the code, you can just simply clone the code via git:

```shell
cd path/to/folder
git clone https://github.com/casbin/casibase
```

## Configuration

### Configure Database

Casibase supports mysql, mssql, sqlite3, postgres. Casibase uses mysql by default. If you use another database, please
modify the import package in [object/adapter](https://github.com/casbin/casibase/blob/master/object/adapter.go).

#### MySQL

Casibase will store its users, nodes and topics information in a MySQL database named: `casibase`. If the database does not exist, it needs to be created manually. The DB connection string can be specified at: <https://github.com/casbin/casibase/blob/master/conf/app.conf>

  ```ini
  driverName = mysql
  dataSourceName = root:123456@tcp(localhost:3306)/
  dbName = casdoor
  ```

#### PostgreSQL

Since we must choose a database when opening Postgres with xorm, you should prepare a database manually before running Casibase.

Let's assume that you have already prepared a database called `casibase`, then you should specify `app.conf` like this:

  ```ini
  driverName = postgres
  dataSourceName = "user=postgres password=postgres host=localhost port=5432 sslmode=disable dbname=casibase"
  dbName =
  ```

:::info

For PostgreSQL, make sure `dataSourceName` has non-empty `dbName` and leave the standalone `dbName` field empty like the above example.

:::

#### CockroachDB

You can also use cockroachdb with postgres driver. It has same configuration as postgreSQL.

  ```ini
  driverName = postgres
  dataSourceName = "user=postgres password=postgres host=localhost port=5432 sslmode=disable dbname=casibase serial_normalization=virtual_sequence"
  dbName =
  ```

:::info

For CockroachDB, don't forget to add `serial_normalization=virtual_sequence` to the `dataSourceName` like the above example. otherwise you will get error regarding existed database, whenever the service started or restarted. Notice, this must be added before the database created.

:::

#### Sqlite3

You should specify `app.conf` like this:

```ini
driverName = sqlite
dataSourceName = "file:casibase.db?cache=shared"
dbName = casibase
```

## Run

There are currently two methods to start, you can choose one according to your own situation.

:::caution

**Casibase** requires **Casdoor** to provide access control and some back-end services, so you must make sure **Casdoor** is running properly before running **Casibase**.

How to install and run Casdoor:

- [Casdoor Installation](https://casdoor.org/docs/basic/server-installation)

:::

### Development mode

#### Backend

Casibase's Go backend runs at port 14000 by default. You can start the Go backend with the following command:

```bash
go run main.go
```

After the server is successfully running, we can start the frontend part.

#### Frontend

Casibase's frontend is a very classic [**Create-React-App (CRA)**](https://create-react-app.dev/) project. It runs at port `13001` by default. Use the following commands to run the frontend:

```bash
cd web
yarn install
yarn start
```

Visit: `http://localhost:13001` in your browser. Log into Casibase dashboard with the default global admin account: `built-in/admin`

```bash
admin
123
```

### Production mode

#### Backend

Build Casibase Go backend code into executable and start it.

For Linux:

```bash
go build
./casibase
```

For Windows:

```bash
go build
casibase.exe
```

#### Frontend

Build Casibase frontend code into static resources (.html, .js, .css files):

```bash
cd web
yarn install
yarn build
```

Visit: `http://localhost:14000` in your browser. Log into Casibase dashboard with the default global admin account: `built-in/admin`

```bash
admin
123
```

:::tip

To use another port, please edit ```conf/app.conf``` and modify `httpport`, then restart the Go backend.

:::
