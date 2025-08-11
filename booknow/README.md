# BookNow

Full-stack hotel e-commerce listing built with React (Vite) and Node.js (Express).

## Quick start

- Terminal 1 (API):
  ```bash
  cd server
  npm run dev
  ```
  API: http://localhost:4000

- Terminal 2 (Web):
  ```bash
  cd client
  npm run dev
  ```
  Web: the dev server will show a local URL (usually http://localhost:5173)

Frontend is configured with `VITE_API_URL` in `client/.env`.

## Features
- Browse cities, view hotels per city
- Filter by search, minimum rating, and facilities
- Hotel detail page with images, facilities, and pricing

## Project structure
```
booknow/
  server/           # Express API
    data/hotels.js  # Sample data
    index.js        # API routes
  client/           # React app (Vite)
    src/
      pages/        # Pages
      services/     # API client
```