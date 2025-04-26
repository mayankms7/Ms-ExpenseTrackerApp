## Features

- User Authentication and Authorization:

      Allow users to sign up and log in to their personal accounts using secure authentication mechanisms.

  Implement role-based access control for administrative tasks.

- Expense and Category Management:

      Enable users to create, update, and delete expense entries and categories.

  Track expenses by date, category, and description.
  Support attaching receipts or other relevant documents to expense entries.

- Dashboard and Reporting:

  Provide a visual dashboard displaying an overview of the user's expenses, including total expenses, expenses by category, and recent transactions.

  Generate reports based on selected date ranges and categories, displaying pie charts and bar graphs to help users understand their spending patterns.

- Responsive User Interface:

  Design a clean, responsive user interface that works seamlessly across desktop, tablet, and mobile devices.

  Utilize React.js for building reusable UI components and managing state effectively.

## Technical Architecture:

- Frontend:

  Utilize React.js for building the user interface, tsparticle library for awesome background effect and used other libraries like unique-names-generator, react-datepicker, moment

  Implement responsive design using CSS frameworks like Bootstrap and Material-Icons.

- Backend:

  Use Node.js and Express.js to build a RESTful API for handling client requests and serving as the application's backend.

  Implement authentication and authorization using JSON Web Tokens (JWT) and middleware to protect endpoints.

- Database:

  Store all data, including user information, expense entries, and categories, in MongoDB, a NoSQL database.

  Implement Mongoose ORM for schema definition and validation.

## Run Locally

Go to the project directory

```bash
  cd Expense-Tracker-App
```

Go to the frontend directory and Install dependencies

```bash
  cd frontend
```

```bash
  npm install
```

Go to the backend directory and Install dependencies

```bash
  cd backend
```

```bash
  npm install
```

Start the frontend server

```bash
  npm start
```

Start the backend server

```bash
  npm run dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file in backend folder

create config.env file in it and all all env variables there.

`DATABASE` : Your MongoDB Connection String

`PORT`: PORT number

## Tech Stack

**Client:** React, Redux, react-bootstrap, Material Icons, tsparticles

**Server:** Node, Express

**Database:** MongoDB
