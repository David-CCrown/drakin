# Dr. Akin - Medical Portfolio Platform

A production-grade medical portfolio website built with Next.js 15, featuring a clean, professional healthcare design, admin dashboard, AI medical assistant, and comprehensive SEO optimization.

## 🚀 Features

- **Modern Medical Design**: Professional healthcare-themed UI with calming blues, greens, and medical aesthetics
- **Responsive Layout**: Mobile-first design that works beautifully on all devices
- **Admin Dashboard**: Complete content management system for articles, gallery, services, and more
- **AI Medical Assistant**: Gemini-powered chatbot for patient FAQs with safety guardrails
- **SEO Optimized**: Server-side rendering, structured data, and optimized meta tags
- **WhatsApp Integration**: Floating contact button for easy patient communication
- **Performance**: Fast loading with optimized images and lazy loading

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS v4 + shadcn/ui
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **AI**: Google Gemini API
- **Media**: Cloudinary
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation

## 📋 Prerequisites

- Node.js 18+ and npm
- PostgreSQL database (Supabase recommended)
- Cloudinary account for media hosting
- Google Gemini API key

## 🔧 Installation

1. **Clone and install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   Create a `.env` file in the root directory (use `env.example` as template):
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/dr_akin_portfolio"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key"
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your-cloud-name"
   CLOUDINARY_API_KEY="your-api-key"
   CLOUDINARY_API_SECRET="your-api-secret"
   GOOGLE_GEMINI_API_KEY="your-gemini-api-key"
   NEXT_PUBLIC_WHATSAPP_NUMBER="+1234567890"
   NEXT_PUBLIC_SITE_URL="http://localhost:3000"
   NEXT_PUBLIC_DOCTOR_NAME="Dr. Akin"
   NEXT_PUBLIC_DOCTOR_EMAIL="contact@drakin.com"
   ```

3. **Set up the database**:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
dr_akin/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── admin/             # Admin dashboard (TODO)
│   ├── api/               # API routes (TODO)
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── layout/           # Header, Footer
│   ├── ui/               # shadcn/ui components
│   └── whatsapp-button.tsx
├── lib/                   # Utility functions
│   └── prisma.ts         # Prisma client
├── prisma/               # Database schema
│   └── schema.prisma
└── public/               # Static assets
```

## 🎨 Design System

The platform uses a medical-themed color palette:

- **Primary Blue**: `#0066CC` - Trust and professionalism
- **Accent Green**: `#00A86B` - Health and vitality
- **Light Blue**: `#E8F4F8` - Calm and clean
- **Neutrals**: Off-whites and grays for balance

## 🚧 Development Status

### ✅ Completed
- Project setup with Next.js 16 and TypeScript
- Medical-themed design system
- Prisma database schema (14 models)
- Homepage with hero, stats, and services sections
- About page with biography and values
- Contact page with form validation
- Header with responsive navigation
- Footer with links and certifications
- WhatsApp floating button

### 🔄 In Progress
- Admin dashboard
- Additional public pages (Services, Gallery, Articles, Credentials)
- AI medical assistant
- API routes and server actions

### 📝 TODO
- Authentication system
- Content management features
- AI chatbot integration
- SEO optimization (sitemap, robots.txt, structured data)
- Image optimization and Cloudinary integration
- Testing and deployment

## 🔐 Admin Access

Admin dashboard will be available at `/admin` (authentication required).

## 📄 License

Private - All rights reserved

## 👨‍⚕️ About

This medical portfolio platform is designed to showcase a doctor's professional identity, expertise, and patient care excellence while providing an easy way for patients to learn about services and book appointments.

---

Built with ❤️ for better healthcare
