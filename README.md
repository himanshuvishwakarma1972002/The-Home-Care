# The Home Care - Next.js Application

Interior design website converted from HTML/CSS to modern Next.js with React, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
home-care-nextjs/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── kitchen/           # Kitchen page
│   │   ├── api/contact/       # Contact form API
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── layout/            # Header, Footer, Navigation
│   │   └── ui/                # Reusable UI components
│   └── lib/                   # Utility functions
└── public/
    └── images/                # All images (107 files)
```

## 🎨 Features

✅ **Modern Tech Stack**
- Next.js 15 with App Router
- React 19
- TypeScript
- Tailwind CSS

✅ **Reusable Components**
- Header with logo and navigation
- Mobile-responsive navigation
- Footer
- Contact form with validation

✅ **Pages**
- Home (Gallery, Services)
- About
- Contact (with working form)
- Kitchen

✅ **Optimizations**
- Next.js Image optimization
- Server-side rendering
- SEO-friendly metadata
- Responsive design

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📝 Notes

- All images from original Site1/images copied to public/images
- Contact form API ready at `/api/contact` (MongoDB integration needed)
- Fully responsive design with Tailwind CSS
- TypeScript for type safety

## 🔜 Next Steps

1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Add MongoDB connection for contact form
4. Customize colors and branding in `tailwind.config.ts`
5. Add more pages as needed

---

**Created:** December 2025  
**Converted from:** Static HTML/CSS website to Next.js React application

