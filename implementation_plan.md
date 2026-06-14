# Vercel Deployment Implementation Plan

To host this application for free on Vercel, we need to restructure the repository slightly so that Vercel's zero-config deployments can automatically build both the React frontend and the Python backend.

## Proposed Changes

### 1. Repository Restructuring
Vercel expects a specific layout for fullstack Python/Node projects. I will organize the files so that it is a 1-click deploy without needing any manual dashboard configuration.

#### [NEW] `package.json`, `vite.config.ts`, etc.
I will move all frontend files (the React Vite app) from the `/frontend` directory directly into the root directory. Vercel automatically detects `package.json` at the root and builds the frontend.

#### [NEW] `api/`
I will rename the `/healthtwin-backend` folder to `/api`. Vercel automatically treats the `/api` directory as Serverless Functions.
- `api/main.py` will be renamed to `api/index.py`, which acts as the main entry point for the serverless backend.
- `requirements.txt` will be moved to the root to instruct Vercel to install the Python dependencies.

### 2. Backend Route Adjustments
#### [MODIFY] `api/index.py`
Vercel serverless functions intercept requests to `/api/*`. I will update the FastAPI router so that all its endpoints are prefixed with `/api` (e.g., `/api/twin`, `/api/reports`) so they match the incoming request paths correctly.

### 3. Frontend API Wiring
#### [MODIFY] `src/services/api.ts`
I will update the `BASE_URL` in the frontend API service. Instead of pointing to `http://localhost:8000`, it will now point to `/api`, which works flawlessly both in local development (using Vite's proxy) and in production on Vercel.

#### [MODIFY] `vite.config.ts`
I will configure the Vite dev server to proxy requests from `/api` to the local Python backend, so you can still run the app locally without any issues.

## User Review Required

> [!IMPORTANT]
> Once I make these changes and push them to your GitHub repository, you will be able to deploy the app **for free** by simply logging into [Vercel](https://vercel.com), clicking "Add New Project", and importing your GitHub repository.
>
> Is this plan acceptable to you?
