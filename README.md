# Code Info

## Server.js File

---

- **Express**

  ```javascript
  const express = require("express");
  ```

  Express is a web framework allows structure a web application to handle multiple different http requests at a specific url.

- **Mongoose**

  ```javascript
  const mongoose = require("mongoose");
  ```

  Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

- **Body - Parser**
  ```javascript
  const bodyParser = require("body-parser");
  ```
  Allows us get requests and get data from the body(for instance,when we send a POST request we want to be able to get the name of that post from the request )

* **Middleware**  
  Functions that get access to res and req objects and next piece of middleware that will be fired after.  
  `The order is important. Always should be before route handler`

  #### Body Parser Middleware Example

  - handle parsing JSON content. Will parse object/array into a browser show as JSON
    ```
      app.use(bodyParser.json());
    ```
    **Example**
    ```javascript
    let people = {
      // {object} example
      name: "Anna",
      age: "12"
    };
    let people = [
      // [{array of objects}] example
      {
        name: "Anna",
        age: "12"
      },
      {
        name: "Sara",
        age: "32"
      }
    ];
    app.get("/", (req, res) => {
      res.json(people);
    });
    ```

- **Urlencoded** is a middleware that is writing documentation for the body-parser

  ```
   app.use(bodyParser.urlencoded({ extended: false }));
  ```

  #### Set static Path Middleware

  **'Path'** will show in browser what you have in this folder overwriting what do you have in res.send

  ```
    app.use(express.static(path.join(__dirname, "client")));
  ```

- **Home Route**

      .get

  handles GET REQUEST: going to a website by typing a URL, so this is a GET request to a server

      .post

  handles POST REQUEST: submitting a form(some data) to a server = POST REQUEST to a server

  #### Example

  ````javascript
  app.get("/", (req, res) => {
    res.send("hello world")
  });```
  ````
