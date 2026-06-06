# OpeningHub

OpeningHub is a full-stack job management platform built with Next.js, TypeScript, Prisma, and MySQL. The platform enables users to discover job opportunities while providing administrators with tools to manage openings, monitor activity, and maintain job listings.

## Features

- Job Discovery & Browsing
- Advanced Search Functionality
- Job Filtering by Experience, Work Mode, and Job Type
- Sorting & Pagination
- Job Details Page
- Admin Dashboard
- Job Creation
- Job Editing
- Job Activation & Deactivation
- Analytics Dashboard with Charts
- Responsive UI
- Dark Mode Support
- End-to-End Testing with Playwright

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

- Server-side data fetching
- Database-driven workflows
- Modular component architecture
- Scalable folder structure
- Production-oriented development practices
- Responsive and accessible user interface

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

Start development server:

```bash
npm run dev
```

Open:

http://localhost:3000

## Future Enhancements

- Job Approval Workflow
- Authentication & Authorization
- Role-Based Access Control
- Email Notifications
- Bookmark & Saved Jobs
- Company Profiles
- Deployment Monitoring

## License

This project is intended for educational and portfolio purposes.

Built with Next.js, Prisma, MySQL, and TypeScript.
