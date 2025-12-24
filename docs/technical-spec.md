# Technical Specification

## Project Structure

### Backend (`/backend`)
* **src/config/**: Database configuration and environment setup.
* **src/controllers/**: Logic for API endpoints (Auth, Projects, Tasks, Tenants, Users).
* **src/middleware/**: Authentication (`authMiddleware.js`) and error handling.
* **src/models/**: Sequelize models (`User`, `Tenant`, `Project`, `Task`, `AuditLog`).
* **src/routes/**: Express route definitions mapping URLs to controllers.
* **src/scripts/**: Database migration and seeding scripts.
* **Dockerfile**: Multi-stage Docker build for the Node.js API.

### Frontend (`/frontend`)
* **src/components/**: Reusable UI components (Layout, Navbar, etc.).
* **src/pages/**: Main application views (Dashboard, Login, Register, Projects, etc.).
* **src/api.js**: Centralized Axios instance for making API requests.
* **Dockerfile**: Docker configuration for the React/Vite application.

---

## Development Setup Guide

### Prerequisites
* Docker & Docker Compose
* Node.js v18+ (for local development without Docker)

### Installation & Running (Docker - Recommended)
The entire application is containerized. To run it:

1.  **Clone the repository.**
2.  **Run Docker Compose:**
    ```bash
    docker-compose up -d
    ```
3.  **Access the App:**
    * Frontend: [http://localhost:3000](http://localhost:3000)
    * Backend Health Check: [http://localhost:5000/api/health](http://localhost:5000/api/health)

*Note: Database migrations and seeding run automatically upon container startup.*

### Running Locally (Manual)
1.  **Database:** Ensure a Postgres instance is running.
2.  **Backend:**
    * `cd backend`
    * `npm install`
    * Set `.env` variables.
    * `npm run migrate`
    * `npm run seed`
    * `npm start`
3.  **Frontend:**
    * `cd frontend`
    * `npm install`
    * `npm run dev`