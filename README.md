# menu-wizard

The aim of the project is an application in which you can create a daily or weekly menu by selecting from ready-made
recipes. Current implementation delivered several initial requirements for MVP and focuses on recipes and users
management.

Product backlog is managed in Github project: https://github.com/users/KasiaCw/projects/1

## How to run

### Pre-requisites

- Git
- Java 17
- Maven
- NPM

### Checkout

```bash
git clone https://github.com/KasiaCw/menu-wizard.git
```

### Start backend

```bash
cd ./menu-wizard/backend
mvn spring-boot:run
```

### Start frontend

```bash
cd ./menu-wizard/frontend
npm install -g @angular/cli
npm install
ng serve
```

### Use the app

1. Open http://localhost:4200
2. Sign-in with one of credentials:
    - `user`/`user`
    - `admin`/`admin`
