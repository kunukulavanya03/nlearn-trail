# nlearn-trail

Backend generation request for repo https://github.com/Malleswar-249/nlearn-trail

## Tech Stack

- **Backend**: FastAPI + SQLAlchemy
- **Frontend**: Provided via GitHub repo (https://github.com/Malleswar-249/nlearn-trail)

## Project Structure

```
nlearn-trail/
├── frontend/           # Frontend (cloned from provided repo)
├── backend/            # Backend API
├── README.md           # This file
└── docker-compose.yml  # Docker configuration (if applicable)
```

## Getting Started

### Prerequisites

- Python 3.11+ (for Python backends)
- Docker (optional, for containerized setup)
- Node.js 18+ (for frontend from repo)

### Backend Setup

```bash
cd backend
# Follow backend-specific setup instructions in backend/README.md
python -m venv .venv
source .venv/bin/activate  # or .venv\Scriptsctivate on Windows
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Frontend Setup (from provided repo)

```bash
cd frontend
npm install
npm run dev
```

## Features

- trail CRUD
- user registration and login

## API Endpoints

- `POST /api/register` - Register a new user.
- `POST /api/login` - Login an existing user.
- `GET /api/trails` - Get all trails.
- `POST /api/trails` - Create a new trail.
- `GET /api/trails/{trail_id}` - Get a trail by ID.
- `PUT /api/trails/{trail_id}` - Update a trail.
- `DELETE /api/trails/{trail_id}` - Delete a trail.

## License

MIT
