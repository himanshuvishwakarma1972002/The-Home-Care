# Installation Guide - The Home Care Next.js

## ⚠️ Installation Issue Solution

Agar npm install me error aa raha hai, to ye steps follow karein:

### Method 1: Use Yarn (Recommended)

```bash
# Pehle yarn install karein (agar already nahi hai)
npm install -g yarn

# Phir yarn se dependencies install karein
yarn install

# Run development server
yarn dev
```

### Method 2: Clean npm Install

```bash
# 1. Node modules remove karein
Remove-Item -Recurse -Force node_modules

# 2. Package lock file delete karein
Remove-Item package-lock.json

# 3. NPM cache clean karein
npm cache clean --force

# 4. Fresh install karein
npm install --legacy-peer-deps

# 5. Development server run karein
npm run dev
```

### Method 3: Use pnpm (Fastest)

```bash
# pnpm install karein
npm install -g pnpm

# Dependencies install karein
pnpm install

# Run development server
pnpm dev
```

## ✅ Successful Installation Ke Baad

1. Browser open karein: http://localhost:3000
2. Aapko home page dikhega with gallery and services
3. Navigation se About, Contact, aur Kitchen pages access kar sakte hain

## 📁 Project Files

### Pages Created:
- ✅ **Home** (`/`) - Hero section, gallery, services
- ✅ **About** (`/about`) - Company information
- ✅ **Contact** (`/contact`) - Contact form with API
- ✅ **Kitchen** (`/kitchen`) - Kitchen design showcase

### Components Created:
- ✅ **Header** - Logo, navigation, mobile menu
- ✅ **Footer** - Company info
- ✅ **Navigation** - Responsive menu
- ✅ **ContactForm** - Working contact form

### Features:
- ✅ Fully responsive design
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Next.js Image optimization
- ✅ SEO-friendly metadata
- ✅ API routes for backend

## 🔧 Common Issues

### Issue: Dependencies install nahi ho rahe
**Solution:** Yarn ya pnpm use karein (upar dekho)

### Issue: Images nahi dikh rahe
**Solution:** Check karein `public/images` folder me 107 images hain

### Issue: Port 3000 already in use
**Solution:** 
```bash
# Different port use karein
npm run dev -- -p 3001
```

## 🚀 Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📝 Next Steps

1. ✅ Dependencies install karein (upar se koi bhi method)
2. ✅ Development server start karein
3. ⚙️ MongoDB connection add karein contact form ke liye
4. 🎨 Colors customize karein `tailwind.config.ts` me
5. 📄 Aur pages add karein jaise Blog, Products, etc.

## 💡 Tips

- VS Code me project open karein for better development experience
- ESLint errors fix karne ke liye: `npm run lint`
- TypeScript errors check karne ke liye files save karein

---

**Happy Coding! 🎉**

