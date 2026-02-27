# React Blog Viewer

A fully responsive blog interface built using React that consumes a public REST API and demonstrates modern frontend architecture including routing, pagination, search filtering, and theme persistence.

**Live Demo:**
[Link to Website](https://blog-readers.vercel.app/)

**GitHub Repository:**
[GitHub Link](https://github.com/Smilemka07/Blog-Web)

---

## Overview

This project is a dynamic blog viewer application built with React and Vite. It fetches blog posts from a public REST API and allows users to browse posts, search titles, navigate through pages, and toggle between light and dark modes.

The goal of this project was to strengthen understanding of React hooks, client-side routing, state management, conditional rendering, and deployment workflows.

---

## Features
* Fetches blog posts from public REST API (DummyJSON)
* Dynamic routing using React Router (/post/:id)
* Individual post detail page with dynamic hero image
* Client-side pagination
* Real-time search filtering
* Dark mode toggle with theme persistence (localStorage)
* Responsive layout for desktop, tablet, and mobile
* Clean UI with dynamic image rendering
* Deployed on Vercel with custom rewrite configuration

---

## Tech Stack
**Frontend:**
* React (Functional Components + Hooks)
* React Router
* Vite
* CSS (Custom styling)

**API:**
* DummyJSON REST API

**Deployment:**
* Vercel

---

## Architecture Highlights

* `useState` used for managing posts, search input, pagination state, and theme mode.
* `useEffect` used for:
     * Fetching API data on mount
     * Resetting pagination when search input changes
     * Persisting dark mode preference
* Client-side routing implemented using dynamic URL parameters.
* Pagination logic implemented using array slicing based on current page and posts per page.
* Vercel rewrite rule added to support SPA routing on refresh.

---

## Installation & Local Setup

Clone the repository:
``` 
git clone <https://github.com/Smilemka07/Blog-Web.git>
cd <my-react-app>
```

Install dependencies:
```
npm install
```

Run development server:
```
npm run dev
```

Build for production:
```
npm build dev
```
---

## Deployment Notes
This project uses client-side routing.
To support refreshing dynamic routes (e.g., `/post/1` ) on Vercel, a rewrite rule was added via `vercel.json` .

---

## What I Learned
* Managing state and re-render cycles in React
* Correct use of `useEffect` dependency arrays
* Handling API data flow from fetch to UI
* Implementing client-side pagination logic
* Dynamic routing with URL parameters
* Persisting UI state using localStorage
* Debugging deployment issues with SPA rewrites

---

## Future Improvements

* Add backend integration for full CRUD functionality
* Add category-based filtering
* Add animations for page transitions
* Improve accessibility (ARIA roles, keyboard navigation)

---
This project demonstrates practical React fundamentals and production-level deployment understanding