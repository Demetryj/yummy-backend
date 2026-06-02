# SoYummy Backend

Backend API for the SoYummy recipe application.

The server provides authentication, recipe management, search, favorites, shopping list functionality, user profile updates, email verification, and subscription features.

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Joi
- Multer
- Cloudinary
- SendGrid
- Swagger
- CORS
- Morgan

## Features

- User registration and login
- JWT-based authentication
- Email verification
- User profile update with avatar upload
- Get recipes by category
- Get recipe details
- Search recipes by title, category, or ingredient
- Add and remove favorite recipes
- Add and delete own recipes
- Manage shopping list
- Subscribe to newsletter
- API documentation with Swagger

## API Documentation

Swagger documentation is available for the backend API.

```txt
https://soyummy-pg-2.onrender.com/api-docs
````

## Main API Routes

```txt
POST   /api/users/register
POST   /api/users/signin
GET    /api/users/current
GET    /api/users/logout
POST   /api/users/verify
GET    /api/users/verify/:verificationToken

GET    /api/recipes/main-page
GET    /api/recipes/popular-recipes
GET    /api/recipes/:recipeId
GET    /api/recipes/category/list
GET    /api/recipes/category/:alias
GET    /api/recipes/favorites/list
PATCH  /api/recipes/:recipeId/favorites/true
PATCH  /api/recipes/:recipeId/favorites/false

GET    /api/search
GET    /api/search/:ingredient

GET    /api/shopping-list
POST   /api/shopping-list/:id
DELETE /api/shopping-list/:id
```

## Environment Variables

Create a `.env` file based on `env.example`:

```env
DB_HOST=
PORT=
SECRET_KEY=
SENDGRID_API_KEY=
EMAIL_FROM=
CLOUDINARY_NAME=
CLOUDINARY_KEY=
CLOUDINARY_SECRET=
```

## Installation

```bash
npm install
```

## Running the Project

Development mode:

```bash
npm run start:dev
```

Production mode:

```bash
npm start
```

## Scripts

```bash
npm start
npm run start:dev
npm run lint
npm run lint:fix
```

## Project Status

This backend was created as a team project for a recipe application.


