# Personal Website Design

## Overview

A personal portfolio and blog website to showcase software projects, writing, and technical work.

## Tech Stack

- **Framework:** Astro
- **Styling:** Tailwind CSS
- **Content:** Markdown files with Astro Content Collections
- **Interactivity:** React components where needed
- **Hosting:** TBD (Vercel, Netlify, GitHub Pages, or Cloudflare Pages)

## Project Structure

```
src/
  components/    # Reusable UI components (Astro + React)
  content/
    blog/        # Markdown blog posts
    projects/    # Markdown project descriptions
  layouts/       # Page layouts (base, blog post, project)
  pages/         # Routes (index, blog, projects, about)
  styles/        # Global styles
public/          # Static assets (images, resume PDF, etc.)
```

## Pages

### Home (/)
- Brief intro/hero section
- Featured projects (2-3)
- Recent blog posts (3-5)
- Links to full projects/blog pages

### Projects (/projects)
- Grid or list view of all projects
- Each project card shows: title, description, tech stack, links

### Blog (/blog)
- List of posts sorted by date (newest first)
- Each post shows: title, date, tags, reading time

### About (/about)
- Background and skills
- Contact information / links

## Content Schema

### Project Entry
- `title`: string
- `description`: string
- `tech`: string[] (technologies used)
- `github`: string (optional)
- `demo`: string (optional)
- `article`: string (optional, link to related blog post)
- `image`: string (optional, screenshot/preview)
- `featured`: boolean (show on home page)
- `date`: date (for sorting)

### Blog Post
- `title`: string
- `description`: string
- `date`: date
- `tags`: string[]
- `draft`: boolean (hide from listing if true)

## Features

- Responsive design (mobile-first)
- Dark/light mode toggle
- Code syntax highlighting in blog posts
- RSS feed for blog
- SEO meta tags
- Reading time calculation for posts
