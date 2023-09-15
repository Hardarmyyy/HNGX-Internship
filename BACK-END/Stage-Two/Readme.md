# HNG Internship - Stage - Two Backend project

This project demonstrates how to create, read, update and delete a resources from the backend database. The project features express and node Js  on the server side together with MongoDB as the database.

## Table of Contents

1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Configuration](#configuration)
5. [Running the Server](#running-the-server)
6. [API Endpoints](#api-endpoints)
7. [Usage](#usage)
8. [Contributing](#contributing)
9. [License](#license)

## Introduction

This objective of this project is to demonstrate how to use create RESTful APIs using Express and Node js on the server side together with MongoDB as the database in your applications. It enables you to add a new user to the person resources using their name, fetch information about the user using their id, updating their information and deleting user information from the database.

### Prerequisites
- Have a computer and internet connection
- Have a general understanding of what RESTful API
- Have `visual-studio code` or any other code editor installed on your computer.
- Have `post-man` or any other RESTful API testing tool installed on your computer.

<details>
  <summary> Server </summary>
  <ul>
    <li><a href="https://nodejs.org/"> Node </a></li>
  </ul>
</details>

<details>
<summary> Database </summary>
  <ul>
    <li><a href="https://www.mongodb.com/"> MongoDB </a></li>
  </ul>
</details>

### Setup
- In order to get a copy of this project you need to download it from the link below.
- <a> https://github.com/Hardarmyyy/HNGX-Internship/tree/main/BACK-END/Stage-Two </a>
- Extract the zipped file and open it in your code editor

### Install
- Run the command below in your terminal to get all required files 
- npm install

### Run Server
- Run the command below in your terminal
- nodemon index or npm run dev


# Example .env file
- PORT=3070
- MONGODB_URI=mongodb://localhost:27017/your_database_name

# API END POINTS

- POST /api  
<a> Create a new user </a>

- Request: JSON object with user data.
- Response: JSON object with the created user's data.

- GET  /api/user_id  
<a> Get a list of user information </a>

- Request: None
- Response: JSON object containing a list of user information.

- PUT /api/user_id  
<a> update the existing user information </a>

- Request: JSON object with user data to be updated.
- Response: JSON object with the updated user's data.

- DELETE /api/user_id  
<a> delete the existing user information </a>

- Request: None
- Response: JSON object with the deleted user's data.

# USAGE

- curl -X GET https://backend-stage-two.vercel.app/api/user_id
- curl -X POST https://backend-stage-two.vercel.app/api
- curl -X PUT https://backend-stage-two.vercel.app/api/user_id
- curl -X DELETE https://backend-stage-two.vercel.app/api/user_id

## Author

👤 **Adeyemo Adams**

- GitHub: [@Hardarmyyy](https://github.com/Hardarmyyy)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/adams-adeyemo-0b7a55220)

## Show your support

Give a ⭐️ if you like this project!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

ACKNOWLEDGEMENTS

## 🙏 Acknowledgments <a name="acknowledgements"></a> 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License

This project is [MIT]() licensed.



