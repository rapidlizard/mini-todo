# Mini Todo

### Techstack:

**Frontend:** React + TypeScript

**Backend:** NodeJs + TypeScript + Express

For the database I decided to store things in memory for the time being so I didn't loose time with setting up and configuring a database engine. If I had the time I would have liked to connect it to **MongoDB** with model repositories and replace the `Array.push(item)`. I would choose MongoDB as it's quite straight forward to use for a small application like this.

Right now there is no **test coverage**. I prioritised getting the features happy paths working at the most basic level, then my next steps would be to add **test coverage** and refactor if necessary. I decided not to practice **TDD** from the start because I find that applying **TDD** on a small application like this is slow and doesn't add much value as there is no real functionality yet.

I would also want to improve the **user experience** and add **error handling**. Right now I just have the happy paths covered. So I don't have any **input checking** and **error handling** incase a user gets the password wrong or doesn't write a valid email. Also for security reasons it's always a good idea to **escape inputs**.

### To run the app and server:

Install dependencies:

```
npm install
```

To run the frontend app `cd` into `/packages/app` and run:

```
npm start
```

To run the backend server `cd` into `packages/server` and run:

```java
//compile & watch typescript
npm run dev

//start server
npm run serve
```

### TODO:

- Write unit and component tests for server and app
- Add MongoDB to replace in memory DB
- Add update and delete functionality to tasks
- Only allow task creation for logged in users

### Server:

- **GET** /auth/user

  - SessionService.getById
    - 401
    - 200 + User

- **POST** /auth/register

  - UserService.create
  - SessionService.create
    - 200 + User

- **POST** /auth/login

  - UserService.getByName
    - 404
  - SessionService.create
    - 200 + User

- **DELETE** /auth/logout

  - SessionService.delete
    - 200

- **GET** /task

  - TaskService.getAll

- **POST** /task

  - ValidateSession
  - TaskService.create(task: Omit<Task, 'userId' | 'id' >, userId)
    - 200 + task

- **PUT** /task/:id

  - ValidateSession
  - TaskService.update
    - 200 + task

- **DELETE** /task/:id

  - ValidateSession
  - TaskService.delete
    - 200

- ValidateSession()

  - 401 no cookie
  - SessionService.getById

    - 401 no valid session

  - UserService.getById
  - req.user = User

### App:

- SessionContext
  - Routes
    - /
      - header [currentUser + logout] || [login + register]
      - main [task-list + task-form]
    - /register
    - /login

### Components:

< Button />

- Submit
  - login
  - register
  - add task
- Delete
  - task
  - logout

< Input />

- email
- password
- task title
- task description

< TaskList />

- < Task />
