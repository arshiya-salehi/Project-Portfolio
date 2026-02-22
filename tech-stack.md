# Tech Stack Overview

## Frontend

### React + TypeScript
- Component-based architecture
- Strong typing for props, state, and API responses
- Functional components with Hooks
- React Router for multi-page navigation

### Vite
- Fast dev server
- Optimized production build
- Simple configuration

### Tailwind CSS
- Utility-first styling
- Responsive design (mobile-first)
- Minimal custom CSS
- Design consistency

---

## Backend

### Node.js + Express.js
- REST API architecture
- Route separation
- Controller + service pattern
- JSON responses

### CORS
- Enable cross-origin communication between frontend and backend

### Axios / Fetch
- Used on frontend to call backend endpoints

---

## Deployment

### GitHub
- Incremental commits
- Proper commit messages
- Repository README with deployed links

### Netlify
- Deploy frontend (Vite build folder)
- Auto-deploy on push to main branch

### Render
- Deploy backend Express server
- Environment variables stored securely

---

## External APIs

### Image API
- Pexels / Pixabay / Unsplash
- Returns random image based on predefined search query

### AI API
- OpenAI / Gemini / Claude / OpenRouter
- Generates image caption based on search keyword

---

## Architecture Overview

Frontend (Netlify)
    |
    | API Calls
    ↓
Backend (Render)
    |
    | Calls external APIs
    ↓
Image API + AI API

---

## Folder Structure

Frontend:
- src/
  - components/
  - pages/
  - hooks/
  - services/
  - App.tsx
  - main.tsx

Backend:
- src/
  - routes/
  - controllers/
  - services/
  - server.ts