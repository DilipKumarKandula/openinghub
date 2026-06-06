# OpeningHub

OpeningHub is a modern full-stack job management platform built with Next.js, TypeScript, Prisma, and MySQL. It provides a streamlined experience for discovering job opportunities while offering administrators powerful tools to manage job listings, monitor activity, and maintain platform quality.

## Features

### Job Discovery

- Browse active job openings
- Search by title, company, or location
- Filter by experience level
- Filter by work mode (Remote, Hybrid, On-Site)
- Filter by job type
- Sort job listings
- Responsive user experience

### Job Management

- Create job openings
- Edit existing job listings
- Activate and deactivate jobs
- Manage job visibility
- View recent openings

### Admin Dashboard

- Job statistics overview
- Active and inactive job tracking
- Work mode analytics
- Interactive charts and insights

### Testing

- End-to-end testing with Playwright
- User workflow validation
- Search and navigation testing

## Tech Stack

### Frontend

- Next.js (App Router)
- TypeScript
- Tailwind CSS

### Backend

- Next.js Server Actions
- Prisma ORM
- MySQL

### Testing

- Playwright

## Architecture Highlights

- Server-side rendering and data fetching
- Database-driven workflows
- Component-based architecture
- Scalable project structure
- Type-safe development with TypeScript
- Production-oriented development practices
- Responsive and accessible UI design

## Getting Started

Clone the repository:

```bash
git clone <repository-url>
cd OpeningHub
```

Install dependencies:

```bash
npm install
```

Configure environment variables:

```env
DATABASE_URL=your_database_url
```

Run database migrations:

```bash
npx prisma migrate dev
```

Start the development server:

```bash
npm run dev
```

Visit:

```text
http://localhost:3000
```

## Roadmap

- Job approval workflow
- Authentication and authorization
- Role-based access control
- Saved jobs and bookmarks
- Employer profiles
- Email notifications
- Advanced analytics
- Public API integrations

## Vision

OpeningHub is designed to simplify job discovery through a clean, efficient, and accessible experience. The platform focuses on usability, maintainability, and scalable architecture, with the goal of continuously evolving into a comprehensive ecosystem for job seekers and employers.

Built with Next.js, TypeScript, Prisma, and MySQL.
