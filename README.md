## Client:
 - GET /auth/user
    - SessionService.getById
        - 401
        - 200 + User

 - POST /auth/register
    - UserService.create
    - SessionService.create
        - 200 + User

 - POST /auth/login
    - UserService.getByName
        - 404
    - SessionService.create
        - 200 + User       

 

 - GET /task
    - TaskService.getAll

 - POST /task
    - ValidateSession 
    - TaskService.create(task: Omit<Task, 'userId' | 'id' >, userId)
        - 200 + task
 
 - PUT /task/:id
    - ValidateSession 
    - TaskService.update
        - 200 + task
 
 - DELETE /task/:id
    - ValidateSession 
    - TaskService.delete
        - 200

- ValidateSession
    - 401 no cookie
    - SessionService.getUserIdBySessionId
        - 401 no valid session    
    - req.user = User 


## App:
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

< Task-list />
- < Task />        
        

Frontend React + TypeScript

Backend Node + TypeScript + Express + No DB