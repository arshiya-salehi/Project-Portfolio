# Portfolio Design Strategy

## Design Philosophy

Minimal.
Easy to navigate.
Project-focused.
Mobile-first.

Recruiters should:
1. Land
2. Click projects
3. See value immediately

---

# Layout Structure

## Navigation Bar

Desktop:
[Logo]  [Projects]  [API Demo]  [About]

Mobile:
Hamburger menu

---

# Home Page

Large header:
"Hi, I'm Arshiya — Software Engineer"

Short subtitle:
"I build scalable systems and intelligent infrastructure."

Primary Button:
→ View Projects

---

# Projects Page

Grid layout:
2-column on desktop
1-column on mobile

Each card contains:
- Title
- Short 2–3 line summary
- Tech stack
- "View Details" button

---

# Project Page Layout

Hero Section:
Project Title

Section 1:
Problem

Section 2:
Solution

Section 3:
Technical Stack

Section 4:
Results / Metrics

Section 5:
GitHub Link

---

# API Demo Page

Centered layout:
- Button
- Loading state
- Image
- Caption below image

Must handle:
- Loading spinner
- Error state
- Empty state

---

# Colors

Avoid default Tailwind palette only.
Choose:

Primary: Indigo / Blue
Accent: Emerald / Purple
Neutral: Gray scale

Use consistent spacing:
- px-6
- py-12
- rounded-xl
- shadow-md

---

# Typography

Headings:
text-3xl / text-4xl

Body:
text-base / text-lg

---

# Mobile Responsiveness

Use:
- flex-col md:flex-row
- grid-cols-1 md:grid-cols-2
- hidden md:block

Test:
- Chrome Dev Tools mobile mode
- Real phone browser

---

# UX Principles

- No long paragraphs
- Bullet points
- Clear section spacing
- Fast loading images
- Buttons obvious and clickable

---

# Code Quality Rules

- Use reusable components
- Use custom hooks when needed
- Comment functions with step-by-step outline
- Avoid inline styles
- No "any" types