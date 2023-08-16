# TypeScript CRUD App with Express and MongoDB

This is a simple CRUD (Create, Read, Update, Delete) application built using TypeScript, Express.js, and MongoDB. It provides a RESTful API for managing user data.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (https://nodejs.org/)
- MongoDB (https://www.mongodb.com/)

## Installation

1. Clone or download this repository to your local machine.
2. Navigate to the project directory in your terminal.

## Getting Started

1. Install the project dependencies by running:
   npm install
2. Start the application using the following command:
   npx ts-node src/index.ts

API Endpoints
POST /users: Create a new user. Send a JSON body with the user's information.
GET /users: Retrieve a list of all users.
GET /users/:id: Retrieve a specific user by their ID.
PUT /users/:id: Update a user's information. Send a JSON body with the updated information.
DELETE /users/:id: Delete a user by their ID.
