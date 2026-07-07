# Tamper-Evident Append-Only Log Service

A secure backend service built with **Node.js**, **Express.js**, **PostgreSQL**, and **Prisma ORM** that stores immutable log entries using a SHA-256 hash chain. Once a log is created, it cannot be modified or deleted. The application verifies the integrity of the entire log chain and supports filtered JSON exports.

---

## Features

- Immutable append-only log storage
- SHA-256 hash chain for tamper detection
- Chain integrity verification
- Export logs with actor and date filters
- PostgreSQL database with Prisma ORM
- API Key Authentication
- Rate Limiting
- Structured Logging using Pino
- Prisma Migrations
- Automated API Testing using Jest & Supertest

---

# Tech Stack

| Technology | Usage |
|------------|-------|
| Node.js | Runtime |
| Express.js | Backend Framework |
| PostgreSQL | Database |
| Prisma ORM | Database ORM |
| Pino | Structured Logging |
| Zod | Request Validation |
| Jest | Testing |
| Supertest | API Testing |

---

# Project Structure

```
temper-log-service/
│
├── prisma/
│   ├── migrations/
│   └── schema.prisma
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── repositories/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── validations/
│   ├── app.js
│   └── server.js
│
├── tests/
│   ├── auth.test.js
│   ├── export.test.js
│   ├── log.test.js
│   ├── validation.test.js
│   └── verify.test.js
│
├── package.json
├── README.md
└── .env.example
```

---

# Database Schema

## Log Table

| Column | Type |
|---------|------|
| id | Integer (Primary Key) |
| actor | String |
| action | String |
| payload | JSON |
| previousHash | String |
| currentHash | String (Unique) |
| createdAt | DateTime |

---

# Hash Chain Design

Every log entry stores:

```
currentHash =
SHA256(
previousHash +
actor +
action +
payload +
createdAt
)
```

Example

```
Log 1

Previous Hash:
GENESIS

Current Hash:
a72c91...

↓

Log 2

Previous Hash:
a72c91...

Current Hash:
9fa6bd...

↓

Log 3

Previous Hash:
9fa6bd...

Current Hash:
cb91fa...
```

If any log is modified, the chain verification fails.

---

# API Endpoints

## Create Log

```
POST /api/log
```

Body

```json
{
  "actor": "Prasad",
  "action": "LOGIN",
  "payload": {
    "ip": "127.0.0.1"
  }
}
```

---

## Get Log

```
GET /api/log/:id
```

Returns log details with verification status.

---

## Verify Chain

```
GET /api/log/verify
```

Returns

```json
{
  "status":"PASS"
}
```

---

## Export Logs

```
GET /api/log/export
```

Optional Query Parameters

```
?actor=Prasad

?startDate=2026-07-01

?endDate=2026-07-31

?actor=Prasad&startDate=2026-07-01&endDate=2026-07-31
```

---

# Authentication

Every request requires

```
x-api-key
```

Example

```
x-api-key: my-secret-api-key
```

---

# Environment Variables

Create a `.env` file

```env
PORT=3000

DATABASE_URL="postgresql://postgres:password@localhost:5432/tamper_log"

API_KEY=my-secret-api-key
```

---

# Installation

Clone the repository

```bash
git clone <repository-url>
```

Install dependencies

```bash
npm install
```

Run Prisma Migration

```bash
npx prisma migrate dev
```

Start the server

```bash
npm start
```

Development Mode

```bash
npm run dev
```

---

# Running Tests

```bash
npm test
```

Output

```
PASS tests/auth.test.js
PASS tests/log.test.js
PASS tests/export.test.js
PASS tests/validation.test.js
PASS tests/verify.test.js
```

---

# Design Decisions

- PostgreSQL was selected for reliability and ACID compliance.
- Prisma ORM simplifies database operations and migrations.
- SHA-256 hash chaining ensures tamper evidence.
- Repository-Service-Controller architecture improves maintainability.
- API Key authentication provides lightweight access control.
- Pino is used for structured application logging.
- Zod validates incoming request payloads.
- Jest and Supertest provide automated API testing.

---

# Known Limitations

- API Key authentication is suitable for demonstration purposes and not production-grade authentication.
- Verification scans the complete chain sequentially.
- No pagination is implemented for exported logs.
- Docker support is not included.

---

# Future Improvements

- JWT Authentication
- Docker & Docker Compose
- Merkle Tree verification
- Redis caching
- CI/CD using GitHub Actions
- Swagger/OpenAPI Documentation
- Webhook notifications

---

# AI USE LOG

| Tool | Approximate Usage | Purpose |
|------|-------------------|---------|
| ChatGPT | Project architecture, Express APIs, Prisma ORM, SHA-256 chain logic, debugging, Jest & Supertest tests, README preparation |

---

# Author

**Prasad Vijay Kakde**

Final Year B.E. Artificial Intelligence & Machine Learning

PES Modern College of Engineering, Pune