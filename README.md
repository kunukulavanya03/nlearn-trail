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

- create learning trails
- view learning trails
- update learning trails
- delete learning trails
- add steps to learning trails
- view steps in learning trails
- update steps in learning trails
- delete steps in learning trails

## API Endpoints

- `POST /api/trails` - Create a new learning trail.
- `GET /api/trails` - Retrieve all learning trails.
- `GET /api/trails/{trail_id}` - Retrieve a specific learning trail.
- `PUT /api/trails/{trail_id}` - Update a learning trail.
- `DELETE /api/trails/{trail_id}` - Delete a learning trail.
- `POST /api/trails/{trail_id}/steps` - Add a new step to a learning trail.
- `GET /api/trails/{trail_id}/steps` - Retrieve all steps in a learning trail.
- `PUT /api/trails/{trail_id}/steps/{step_id}` - Update a step in a learning trail.
- `DELETE /api/trails/{trail_id}/steps/{step_id}` - Delete a step in a learning trail.

## License

MIT
