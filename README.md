# Personal Task Tracker

A clean, no-nonsense task tracker app built with React. Created as part of an intern pre-hire assignment to showcase solid frontend fundamentals, component design, and the ability to actually ship something that works.

---

## What This Is

It's a simple task tracker. You log in with a name (no passwords or fancy auth), then you're taken to a dashboard where you can:

- Add tasks (title required, description optional)
- Edit or delete them (with confirmation)
- Mark them as done or not done
- Filter them (all, completed, pending)
- See when each task was created
- And most importantly — your tasks don’t magically disappear after refresh

Everything is stored in localStorage, because we keep it simple and functional.

---

## Why I Built It This Way

This isn’t over-engineered with Redux or bloated UI libraries. It’s just React (functional components + hooks), styled with clean CSS, and designed to run smoothly on both desktop and mobile. You don’t need a manual to use it — and that’s kind of the point.

---

## How to Run It

1. Clone the repo  
   `git clone https://github.com/your-username/task-tracker.git && cd task-tracker`

2. Install dependencies  
   `npm install`

3. Start the app  
   `npm start`

4. Go to `http://localhost:3000`  
   Login with any name. You're in.

---

## Tech Used

- React.js (of course)
- CSS for styling
- localStorage to keep your data safe from page refreshes

No external state managers. No overkill. Just React doing what it does best.

---

## Extra Features (If You're Into That)

I kept the core clean, but here’s what you *could* add (or maybe I already did):

- Search bar to find tasks quickly
- Priority levels (because not all tasks are born equal)
- Due dates (for the organized ones)
- Smooth transitions (for the aesthetic folks)
- Dark mode (because light mode isn’t for everyone)
- Tags or categories to sort chaos


