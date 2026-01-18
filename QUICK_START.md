# 🚀 Quick Start Guide

## 5-Minute Setup

### Step 1: Navigate to Project
```bash
cd c:/Users/vitru/Desktop/project-0/frontend
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm start
```

### Step 4: Open Browser
- Automatically opens at http://localhost:3000
- If not, open it manually

## 📄 Pages Available

Once running, visit these URLs:

| Page | URL | Purpose |
|------|-----|---------|
| 🏠 Home | http://localhost:3000/ | Landing page with hotline |
| ℹ️ About | http://localhost:3000/about | Organization mission |
| 📚 Resources | http://localhost:3000/resources | Crisis tools & coping strategies |
| 👥 Psychologists | http://localhost:3000/psychologists | Team directory |
| 📞 Contact | http://localhost:3000/contact | Emergency contact & form |

## ✨ Key Features to Explore

### 🎯 Home Page
- Emergency hotline prominently displayed
- "You Are Not Alone" message
- Clear call-to-action buttons
- Stats and values sections
- Smooth animations

### 📚 Resources Page
- Crisis resources (911, hotline, text)
- Warning signs (behavioral, emotional, verbal)
- What to do in a crisis (step-by-step)
- Coping strategies (6 methods)
- Grounding techniques (5-4-3-2-1, box breathing, etc.)

### 👥 Psychologists Page
- Mock psychologist profiles
- Specialties and availability
- Contact buttons
- FAQ section
- How to connect information

### 📞 Contact Page
- Multiple contact methods
- Emergency alert section
- Contact form (demo - would need backend)
- Support options
- Legal disclaimers

### ♿ Accessibility Features
- Try navigating with Tab key (keyboard-friendly)
- Test with mobile (fully responsive)
- All images have alt text
- Colors have proper contrast
- Supports screen readers

## 📱 Test Responsive Design

### In Browser DevTools:
1. Press `F12` or `Ctrl+Shift+I`
2. Click device toggle icon (top-left of DevTools)
3. Select device:
   - iPhone 12
   - iPad
   - Desktop

### Or resize browser window:
- **Mobile**: 375px width
- **Tablet**: 768px width
- **Desktop**: 1200px+ width

## 🎨 Design System

### Colors
- 🔵 **Blue** (#4a90e2) - Trust, calm
- 🟢 **Green** (#52c878) - Hope, growth
- 🟡 **Warm** (#f39c12) - Energy
- 🔴 **Red** (#e74c3c) - Emergency alerts

### Components
All components are in `src/components/`:
- **Header** - Navigation + hotline
- **Footer** - Resources + disclaimer
- **PsychologistCard** - Profile cards

All pages are in `src/pages/`:
- HomePage
- AboutPage
- ResourcesPage
- PsychologistsPage
- ContactPage

## 🛠 Make Changes

### Edit Content
1. Open `src/pages/HomePage.js` (for example)
2. Change text directly in JSX
3. Save file (auto-refresh in browser)
4. See changes instantly

### Edit Colors
1. Open `src/styles/variables.css`
2. Change any `--color` variable
3. Watch entire site update

### Edit Psychologists
1. Open `src/pages/PsychologistsPage.js`
2. Find `const psychologists = [...]`
3. Add/edit psychologist objects
4. Changes reflect in the grid

## 📦 Build for Production

```bash
npm run build
```

Creates optimized `build/` folder ready to deploy.

## 🧪 Test Accessibility

### Keyboard Navigation
- Press `Tab` to move through interactive elements
- Press `Shift+Tab` to move backwards
- Press `Enter` to activate buttons/links
- Should be able to access everything without mouse

### Screen Reader
- On Windows: Use Narrator (Windows+H)
- On Mac: Use VoiceOver (Cmd+F5)
- On Linux: Use GNOME Screen Reader
- Listen to page descriptions

### Color Contrast
- Use: https://webaim.org/resources/contrastchecker/
- All text should have ratio 4.5:1 or higher

## 🚨 Important Crisis Information

**Always Include:**
- 🚑 Call 911 for emergencies
- 📞 National Hotline: 1-800-273-8255
- 💬 Crisis Text Line: Text HOME to 741741
- 🌍 International: https://www.iasp.info

## 📚 File Structure Quick Reference

```
src/
├── components/        ← Reusable UI components
│   ├── Header.js
│   ├── Footer.js
│   └── PsychologistCard.js
├── pages/            ← 5 pages (routes)
│   ├── HomePage.js
│   ├── AboutPage.js
│   ├── ResourcesPage.js
│   ├── PsychologistsPage.js
│   └── ContactPage.js
├── styles/           ← Global CSS
│   ├── variables.css (colors, spacing)
│   └── global.css    (reset, global styles)
├── App.js            ← Router config
└── index.js          ← Entry point
```

## ❓ Common Issues

### "Port 3000 already in use"
```bash
PORT=3001 npm start
```

### "Module not found" error
```bash
npm install
```

### Changes not showing
1. Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Clear browser cache
3. Restart npm start

### Build fails
```bash
npm install
rm -rf node_modules
npm install
npm run build
```

## 📖 Learn More

See these files for detailed info:
- 📄 **PROJECT_GUIDE.md** - Comprehensive guide
- 📄 **README_VITRINE.md** - Technical documentation
- 📁 **src/** - Well-commented code

## 💡 Pro Tips

1. **CSS Variables**: Edit colors in `variables.css` - changes everywhere
2. **Components**: Copy PsychologistCard to create similar cards
3. **Pages**: Each page is self-contained, easy to modify
4. **Routing**: React Router handles navigation automatically
5. **Mobile**: All layouts mobile-first, desktop is enhanced version

## 🎯 Next Steps

1. ✅ Get it running (`npm start`)
2. ✅ Explore all 5 pages
3. ✅ Test on mobile (DevTools)
4. ✅ Try keyboard navigation
5. ✅ Edit some content to see hot-reload
6. ✅ Read PROJECT_GUIDE.md for production tips

## 🆘 Need Help?

1. Check the PROJECT_GUIDE.md for detailed documentation
2. Look at inline code comments
3. Review React Router docs: https://reactrouter.com
4. Check React docs: https://react.dev

## 📞 Support Resources

For mental health support:
- 🌐 https://suicidepreventionlifeline.org
- 📞 1-800-273-8255
- 💬 Text HOME to 741741
- 🎯 https://988lifeline.org

---

**Happy coding! Build with compassion. ❤️**
