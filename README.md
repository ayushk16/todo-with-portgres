# EXPRESS HTTP CRUD API

> ---

This is an Express.js API, that works with postgres as database, YUP for validation and Sequelize as the ORM(Object-Relation Mapper).
This `README` will guide you through succesfull setting up and running the project on your devices.

#### Prerequisites :

Before starting you should have following installed in your devices:

> ---
>
> - node.js : [nodejs.org](https://nodejs.org/en)
> - postgresql : [ postgresql.org ](https://www.postgresql.org/)
> - git : [github.com](https://www.github.com/)
>
> ---

#### Technologies Used:

> ---
>
> - **Node JS**
> - **Express JS**
> - **Postgresql**
> - **Sequelize (ORM)**
> - **YUP**
>
> ---

## API EndPoints

- #### GET /todos/ :

  Get all todos.
  \
   Response will be like

  ```json
  {
    "todos": [
      {
        "id": 1,
        "text": "Todo 1",
        "isCompleted": false
      },
      {
        "id": 2,
        "text": "Todo 2",
        "isCompleted": false
      },
      {
        "id": 3,
        "text": "Todo 3",
        "isCompleted": true
      }
    ]
  }
  ```

  or

  if database is empty

  ```json
  {
    "todos": []
  }
  ```

  ***

- #### GET /todos/:id :

  Get an existing todo with id= `:id`.
  \
   Response will be like

  ```json
  {
    "id": 1,
    "text": "Todo 1",
    "isCompleted": false
  }
  ```

  or
  when calling wrong id like `GET /todos/5653235`

  ```json
  {
    "status": 404,
    "message": "not found"
  }
  ```

  ***

- #### POST /todos/ :

  Create a todo.
  \
   Send Request with body like

  ```json
  {
    "text": "hello world",
    "isCompleted": true
  }
  ```

  if your data matches the validation in Response you get

  ```json
  {
    "status": "created",
    "todo": {
      "id": 7,
      "text": "hello world",
      "isCompleted": true
    }
  }
  ```

  else if you entered `wrong data formate`
  in Response you get

  ```json
  {
    "error": "Not acceptable response."
  }
  ```

  ***

- #### PUT /todos/:id :

  Update an existing todo with id= `:id`.
  \
   Send Request with body like

  ```json
  {
    "text": "updated todo",
    "isCompleted": false
  }
  ```

  if todo with id exist and all your body data is in valid formate you get

  ```json
  {
    "status": "Updated",
    "todo": {
      "id": 5,
      "text": "updated todo",
      "isCompleted": false
    }
  }
  ```

  if todo with given id not exist

  ```json
  {
    "status": 404,
    "message": "id not found"
  }
  ```

  else if you entered `wrong data formate`
  in Response you get

  ```json
  {
    "error": "Not acceptable response."
  }
  ```

  ***

- #### DELETE /todos/:id :

  Delete an existing todo with id= `:id`.

  on successful deletion you get

  ```json
  {
    "deleted": "5"
  }
  ```

  if todo with given id not exist

  ```json
  {
    "status": 404,
    "message": "id not found"
  }
  ```

  ***

## Getting Started

1. Clone this repostitory :
   ```cli
   git clone https://github.com/ayushk16/todo-with-portgres
   cd todo-with-portgres
   ```
2. Install the project dependencies :
   ```
   npm install
   ```
3. Create a PostgreSQL database and update the configuration in `.env` file with your database credentials use `.env.example` as refrence.
4. Start Express Server :
   ```cli
   npm start
   ```

---

## Environment Variables

You can configure the API using environment variables. Create a `.env` file in the root directory of the project and add copy the existing `.env.example` to `.env` and fill the mentioned fields.

## Contribution

> \
> If you'd like to contribute to this project, please follow these steps:
>
> 1. Fork the repository on GitHub.
> 2. Create a new branch from the main branch for your changes
> 3. Make your changes and commit them.
> 4. Push your changes to your fork.
> 5. Create a pull request to the main branch of this repository.
>
> ---
