# Flowbit Backend

Flowbit Backend is a TypeScript-based REST API server designed to manage user authentication and ticketing operations for the Flowbit platform. It uses Express.js and MongoDB for routing and persistent storage, providing endpoints for user management, ticket creation, and ticket status updates. The backend is intended to serve as the core service for client applications that require secure user and ticket workflows.

## Features

- **User Authentication**
  - Signup: Create a new user account with name, email, and password.
  - Signin: Authenticate using email and password to receive a JWT token.
  - Protected routes using JWT-based middleware.

- **Ticket Management**
  - Create tickets: Users can generate support or service tickets.
  - Status updates: Ticket status can be updated (e.g., marked as "done" via webhook).
  - View ticket status: Users can check the status of their tickets.
  - Webhook integration for ticket status updates (compatible with n8n).

- **Screen Registry**
  - Endpoint to retrieve screen URLs associated with a user account from a registry file.

## Tech Stack

- **Backend:** Express.js, TypeScript
- **Database:** MongoDB (Mongoose ODM)
- **Authentication:** JWT (JSON Web Tokens)
- **Validation:** Zod
- **Other:** Axios, bcrypt, dotenv, cors

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB instance (local or cloud)
- n8n workflow (for ticket webhook integration)

### Environment Variables

Create a `.env` file in the project root with the following variables:

```
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_PASS=your_jwt_secret
N8N_SECRET=your_n8n_webhook_secret
```

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Abhinav7579/Flowbit_backend.git
   cd Flowbit_backend
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the development server:**
   ```sh
   npm run dev
   ```
   The server will start on `http://localhost:8000`.

### API Endpoints

#### User Routes

- `POST /api/v1/user/signup`  
  Create a new user.  
  Body: `{ "name": string, "email": string, "password": string }`

- `POST /api/v1/user/signin`  
  Sign in and receive JWT token.  
  Body: `{ "email": string, "password": string }`

- `GET /api/v1/user/me/screens`  
  Get registered screens for the authenticated user.  
  Header: `Authorization: Bearer <token>`

#### Ticket Routes

- `POST /api/v1/user/ticket/generate`  
  Create a new ticket (protected).  
  Body: `{ "subject": string, "description": string }`  
  Header: `Authorization: Bearer <token>`

- `POST /api/v1/user/ticket/webhook/ticket-done`  
  Webhook to mark ticket as done (requires secret header).  
  Body: `{ "ticketId": string }`  
  Header: `x-secret: <N8N_SECRET>`

- `GET /api/v1/user/ticket/status`  
  Get the status of a user's ticket (protected).  
  Header: `Authorization: Bearer <token>`

## Development Notes

- Endpoints are grouped under `/api/v1` for versioning.
- JWT middleware secures protected routes.
- Registry data is stored in `registory.json` and accessed via `/user/me/screens`.
- Ticket data integrates with n8n via webhook for status management.

## Contributing

Feel free to open issues or submit pull requests for improvements or bug fixes.

## License

This project currently does not specify a license.

---

**Author:** [Abhinav7579](https://github.com/Abhinav7579)
