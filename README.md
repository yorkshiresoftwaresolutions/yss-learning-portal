# Yorkshire Software Solutions Learning Portal

A modern Next.js learning platform for teaching web development basics to beginners.

## Tech Stack

- **Next.js 16** (latest version)
- **TypeScript**
- **Tailwind CSS**
- **React 19**

## Features

- ✅ **App Router** for optimal performance and SEO
- ✅ **Dynamic Routes** for courses and lessons
- ✅ **Responsive Design** with Tailwind CSS
- ✅ **Interactive Lessons** with collapsible solutions
- ✅ **Static Site Generation** for fast page loads
- ✅ **Yorkshire Software Solutions Branding**

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                          # Root layout with Header/Footer
│   ├── page.tsx                            # Landing page (/)
│   ├── courses/
│   │   ├── page.tsx                        # Courses list (/courses)
│   │   └── [courseId]/
│   │       ├── page.tsx                    # Course detail (/courses/[courseId])
│   │       └── lessons/
│   │           ├── page.tsx                # Lessons list (/courses/[courseId]/lessons)
│   │           └── [lessonId]/
│   │               └── page.tsx            # Lesson detail (/courses/[courseId]/lessons/[lessonId])
│   └── globals.css                         # Global styles
└── components/
    ├── Header.tsx                          # Site header with navigation
    └── Footer.tsx                          # Site footer
```

## Getting Started

### Prerequisites

- Node.js 20+ (currently on 18.20.6, upgrade recommended)
- pnpm

### Installation

Dependencies are already installed. If you need to reinstall:

```bash
pnpm install
```

### Development

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Building for Production

```bash
pnpm build
```

### Running Production Build Locally

```bash
pnpm start
```

## Deployment

This project is configured for **Vercel** deployment.

### Deploy to Vercel

1. **Via Vercel Dashboard**:
   - Connect your GitHub repository
   - Vercel will auto-detect Next.js configuration
   - Deploy!

2. **Via Vercel CLI**:
   ```bash
   npm i -g vercel
   vercel
   ```

### Environment Variables (Future)

When adding features like contact forms with CAPTCHA:

1. Add environment variables in Vercel Dashboard under **Settings → Environment Variables**
2. Use Next.js API routes (`src/app/api/`) for backend functionality
3. Never commit secrets to the repository

Example environment variables for email/CAPTCHA:
```
RECAPTCHA_SECRET_KEY=your_secret_key
SMTP_HOST=smtp.example.com
SMTP_USER=your_email@example.com
SMTP_PASS=your_password
```

## Available Courses

Currently available courses:

1. **HTML Basics** - 5 lessons
2. **CSS Fundamentals** - 6 lessons
3. **JavaScript Introduction** - 8 lessons

## Adding New Content

### Adding a New Course

Edit `src/app/courses/page.tsx` and add to the `courses` array:

```typescript
{
  id: 'new-course',
  title: 'New Course Title',
  description: 'Course description',
  lessonsCount: 5,
  level: 'Beginner',
  duration: '2-3 hours',
}
```

Then add the course data to:
- `src/app/courses/[courseId]/page.tsx` in `coursesData`
- `src/app/courses/[courseId]/lessons/page.tsx` in `coursesData`

### Adding Lesson Content

Edit `src/app/courses/[courseId]/lessons/[lessonId]/page.tsx` and add content to the `lessonContent` object.

## BFF Pattern for Backend Features

When you're ready to add backend features (email, CAPTCHA, etc.):

1. Create API routes in `src/app/api/`
2. Use environment variables for secrets
3. Validate on both frontend and backend
4. Example structure:

```
src/app/api/
├── contact/
│   └── route.ts          # POST /api/contact
└── validate-captcha/
    └── route.ts          # POST /api/validate-captcha
```

## Tailwind Configuration

Yorkshire Software Solutions brand colors are configured in `tailwind.config.ts`:

- `yss-primary`: #c62828 (Red)
- `yss-primary-dark`: #8e0000
- `yss-primary-light`: #ff5f52

## License

© 2024 Yorkshire Software Solutions Ltd. All rights reserved.

## Contact

- Website: [yorkshiresoftwaresolutions.co.uk](https://yorkshiresoftwaresolutions.co.uk)
- Email: info@yorkshiresoftwaresolutions.co.uk
- Phone: 01133 400 999
