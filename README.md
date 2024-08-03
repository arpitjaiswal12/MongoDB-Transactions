# Transaction Management

In MongoDB, transactions allow you to perform multiple operations in a sequence as a single unit. This means that either all the operations succeed, or none of them do. This is useful in scenarios where you need to ensure data consistency across multiple collections or documents.

## Features

- Create User 
- Create Booking
- List all users and booking details

## Tech Stack
Node.js, Express.js and MongoDB.

### Prerequisites

- Node.js
- MongoDB
- npm (or yarn)

## API Endpoints

### User

- **POST** `/api/user/create`: Create a new user
- **GET** `/api/user/get-users`: List all user

### Booking

- **POST** `/api/booking/book-ticket`: Book an ticket
- **GET** `/api/booking/get-booking`: List all booking 


## Acknowledgements

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Mongoose-Transaction](https://mongoosejs.com/docs/transactions.html)
- [MongoDB](https://www.mongodb.com/)
- [MongoDB-Transaction](https://www.mongodb.com/docs/v5.2/core/transactions/)


