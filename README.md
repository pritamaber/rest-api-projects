# REST api projects

this repo host some of my api projects

## 1. hello-api

very simple api , just prints hello for the route "/hello"

## 2. quotevault-api

very simple quotes api with two data points , it is a complete api with CRUD operations

## 3. taskify-api

its become exciting here onwards , this taskify api is hosted on render backed -- the frontend is available at taskify.impritam.com or can be accessed at my personal dev website at impritam.com and projects.impritam.com

This taskify api has all CRUD endpoints which can be accessed at - api.impritam.com/api/tasks

- GET - `api.impritam.com/api/tasks` - list all taks

- GET - `api.impritam.com/api/tasks/id` - list tas with the id

- POST - `api.impritam.com/api/tasks` - add a task with title, description

- DELETE - `api.impritam.com/api/tasks/id` - delete task with given id

### View the project frontent at taskify.impritam.com

## 4. contactbook-api

It’s getting exciting here too — this ContactBook API is built with Express and supports filtering, sorting, and pagination.

The frontend will soon be live, but for now, the API is available locally at: `http://localhost:3000/contacts`

available endpoints

- GET /contacts → list all contacts

- GET /contacts/:id → get contact by ID

- GET /contacts?city=Delhi → filter by city

- GET /contacts?page=1&limit=5 → pagination

- GET /contacts?sort=asc&sortBy=name → sort results

That’s it for now — simple and solid. More features coming soon.

## 5. auth-api jwt based authentication

This is a simple Auth API project built with Node.js and Express. It supports registration, login, and a protected /me route using JWT.

All routes are prefixed with `/api.`

Available Endpoints

POST `/api/register` – create a new user

→ required: name, email, password

POST `/api/login` – login with credentials

→ required: email, password

→ returns a JWT token

GET `/api/me` – protected route, shows logged-in user's data

→ requires Authorization: Bearer <token> header

## Visit my portfolio

**impritam.com** and **projects.impritam.com**
