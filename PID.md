# Portfolio Project Implementation Document (PID)

## Project Goal

Build a full-stack portfolio website that:
- Showcases at least 2 projects
- Has a clean navigation system
- Is mobile responsive
- Uses React + TypeScript + Express
- Includes an API demo page
- Is deployed on Netlify + Render

---

# Phase 1: Setup (Days 1–3)

## 1. Initialize Frontend
- Create Vite + React + TypeScript project
- Install:
  - react-router-dom
  - axios
  - tailwindcss

## 2. Setup Tailwind
- Configure Tailwind
- Test responsive layout

## 3. Initialize Backend
- Create Express server
- Setup TypeScript
- Install:
  - express
  - cors
  - dotenv
  - axios

---

# Phase 2: Core Pages (Days 4–7)

## Required Pages

### 1. Home Page
- Minimal landing page
- Quick links to:
  - Projects
  - About
  - API Demo

### 2. About Page
- Short bio
- Skills summary
- Technologies used

### 3. Projects Page
- List of projects as cards
- Each project clickable
- Separate page for each project

Projects:
- Cloud Environment RL Auto-Scaler
- University Web Engine

---

# Phase 3: Project Pages (Days 7–9)

Each project page should include:

## 1. Scope
What problem does it solve?

## 2. Technical Stack

## 3. Key Features

## 4. Impact / Results

### Cloud RL Auto-Scaler
- Replaced threshold scaling
- Reduced cost significantly
- Used reinforcement learning

### University Web Engine
- Full search engine pipeline
- Tokenization
- TF-IDF
- Latency optimization

---

# Phase 4: API Page (Days 9–11)

## Requirements

- Button: "Generate Random Image"
- Backend endpoint:
  GET /api/generate

## Backend Flow

1. Pick random query from predefined list
2. Call Image API
3. Call AI API to generate caption
4. Return:
   {
     imageUrl,
     caption
   }

## Frontend Flow

1. Button click
2. Call backend
3. Store result in state
4. Render image + caption

---

# Phase 5: Deployment (Days 11–13)

## 1. Deploy Backend to Render
- Connect GitHub repo
- Set environment variables
- Test endpoint

## 2. Deploy Frontend to Netlify
- Connect repo
- Set build command: npm run build
- Publish directory: dist

## 3. Add Portfolio Link to GitHub Description

---

# Phase 6: Polish (Day 14)

- Improve spacing
- Improve colors
- Fix responsiveness
- Clean commit history
- Add README