# E-Commerce Database

This backend application utilizes Object Relational Mapping (ORM) programming to manipulate database tables on an API platform for products, categories, and tags via GET, PUT, POST, and DELETE queries.

## Features

- Allow a user to manipulate database tables using Thunder Client or the like.

## Technology

The application connects to a MySQL database that executes an sql query when the user interacts with data tables in various platforms;

## Usage

The user can post, update, delete, or get data from a backend e-commerce database.

- Category Routes:

  - GET
    - all categories
    - single category
  - POST
    - single category
  - PUT
    - single category
  - DELETE
    - single category

- Product Routes:

  - GET
    - all products
    - single product
  - POST
    - single product
  - PUT
    - single product
  - DELETE
    - single product

- Tags Routes:
  - GET
    - all tags
    - single tag
  - POST
    - single tag
  - PUT
    - single tag
  - DELETE
    - single tag

## Installation

Install package.json dependencies.

- Run "npm i"

Connect connection.js script to your local SQL database editor.

- Modify database password line in .env file with that of your local SQL database editor.

Create database tables:

- Run schema.sql in your local SQL database editor.

- Seed SQL database editor
  - Run "node seeds/index.js"

Execute the program:

- Run "npm start"
