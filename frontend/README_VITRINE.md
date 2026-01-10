# Hope & Support - Suicide Prevention & Psychological Support Platform

A modern, compassionate, and accessible vitrine website dedicated to suicide prevention and psychological support.

## 🎯 Overview

This is a professional, responsive website designed to encourage people in emotional distress to seek help. It combines supportive messaging, crisis resources, professional guidance, and accessibility best practices to create a trust-inspiring platform.

## 📋 Project Structure

```
frontend/
├── public/                 # Static files
├── src/
│   ├── components/        # Reusable React components
│   │   ├── Header.js      # Navigation & hotline badge
│   │   ├── Header.css
│   │   ├── Footer.js      # Footer with resources & disclaimer
│   │   ├── Footer.css
│   │   ├── PsychologistCard.js    # Card component for psychologists
│   │   └── PsychologistCard.css
│   ├── pages/             # Page components (one per route)
│   │   ├── HomePage.js    # Landing page with CTA
│   │   ├── HomePage.css
│   │   ├── AboutPage.js   # Mission, values, approach
│   │   ├── AboutPage.css
│   │   ├── ResourcesPage.js       # Crisis resources, coping strategies
│   │   ├── ResourcesPage.css
│   │   ├── PsychologistsPage.js   # List of psychologists
│   │   ├── PsychologistsPage.css
│   │   ├── ContactPage.js         # Contact form & emergency info
│   │   └── ContactPage.css
│   ├── styles/            # Global styles
│   │   ├── variables.css  # CSS variables for colors, spacing, typography
│   │   └── global.css     # Global reset and styles
│   ├── App.js             # Main router setup
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## 🎨 Design Features

### Color Palette
- **Primary Blue** (#4a90e2): Trust and calm
- **Secondary Green** (#52c878): Hope and growth
- **Warm Accent** (#f39c12): Energy and positivity
- **Red** (#e74c3c): Emergency alerts
- **Soft Grays**: Clean, accessible backgrounds

### Key Design Principles
✅ **Accessible**: ARIA labels, semantic HTML, high contrast, keyboard navigation
✅ **Responsive**: Mobile-first design, works on all devices
✅ **Calming**: Soft animations (respects prefers-reduced-motion), no aggressive elements
✅ **Trust-Building**: Professional, clean layout with empathetic messaging
✅ **Supportive**: Non-judgmental, hopeful language throughout

## 📄 Pages Overview

### 1. **Home Page** (`/`)
- Hero section with "You Are Not Alone" messaging
- Prominently featured emergency hotline
- CTA buttons (Call, Chat, Get Help)
- Why We Exist section with statistics
- Services overview
- Core values
- Hope-focused closing message

### 2. **About Page** (`/about`)
- Organization mission and approach
- Why suicide prevention matters
- Core values (Empathy, Confidentiality, Respect, Hope, Accessibility, Excellence)
- How we approach support (6-step process)
- Important emergency disclaimer
- CTA to start a conversation

### 3. **Resources Page** (`/resources`)
- Emergency crisis contacts (911, hotline, crisis text line)
- Warning signs (behavioral, emotional, verbal, situational)
- What to do in a crisis (6-step guide)
- Healthy coping strategies
- Grounding & breathing techniques (5-4-3-2-1, Box Breathing, Body Scan, Progressive Muscle Relaxation)
- Links to additional resources
- CTA for professional support

### 4. **Psychologists Page** (`/psychologists`)
- Professional team directory
- Psychologist cards with specialty, availability, bio
- How to connect (Call, Chat, Schedule, Begin Support)
- Our commitment (6 points)
- FAQ section
- CTA to call hotline

### 5. **Contact Page** (`/contact`)
- Emergency alert section
- Multiple contact methods (hotline, text, email, chat)
- Contact form for messages
- Support options overview
- Legal disclaimers and privacy information
- FAQ
- Final empowering message

## 🛠 Tech Stack

- **React 19**: Component-based UI framework
- **React Router v6**: Client-side routing
- **CSS3**: Styling with CSS variables for theming
- **Accessibility**: WCAG 2.1 compliant

### Key Libraries
```json
{
  "react": "^19.2.3",
  "react-dom": "^19.2.3",
  "react-router-dom": "^6.20.0"
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📱 Responsive Design

The website is fully responsive across all devices:
- **Desktop**: Full layout with multiple columns
- **Tablet**: Optimized grid layouts
- **Mobile**: Single column, touch-friendly navigation

Breakpoints:
- 1200px: Max width for desktop content
- 768px: Tablet optimizations (hide some nav elements, adjust grids)
- 480px: Mobile optimizations (single column, larger touch targets)

## ♿ Accessibility Features

✓ **Semantic HTML**: Proper heading hierarchy, semantic elements
✓ **ARIA Labels**: Descriptive labels for screen readers
✓ **Color Contrast**: WCAG AA compliant text contrast ratios
✓ **Keyboard Navigation**: All interactive elements accessible via keyboard
✓ **Focus Indicators**: Clear focus states for keyboard navigation
✓ **Skip Link**: "Skip to main content" link for screen reader users
✓ **Reduced Motion**: Respects `prefers-reduced-motion` setting
✓ **Alt Text**: Meaningful descriptions for images
✓ **Form Labels**: Associated labels for all form inputs

## 🎯 Component Descriptions

### Header Component
- Sticky navigation bar
- Logo linking to home
- Navigation menu with smooth links
- Prominent hotline number badge
- Mobile hamburger menu

### Footer Component
- Emergency disclaimer
- Quick links
- Contact information
- Social media links
- Copyright information

### PsychologistCard Component
- Avatar/profile image
- Name, specialty, availability badges
- Brief bio
- Contact button
- Hover effects for engagement

## 🔐 Important Security & Legal Notes

⚠️ **Emergency Services**: The website includes clear disclaimers that this is NOT a replacement for emergency services. Users in immediate danger are directed to call 911.

✓ **Confidentiality**: All information about privacy and ethical standards is clearly stated
✓ **No Harmful Content**: Language is supportive, never triggering
✓ **Judgment-Free**: Non-judgmental, inclusive approach throughout

## 📊 Content Tone

The entire site uses:
- **Supportive language**: "You are not alone"
- **Empowering messaging**: Focus on hope and potential
- **Non-judgmental**: No shame, no blame
- **Clear CTAs**: Easy to find ways to get help
- **Educational**: Resources to understand mental health

## 🎨 Customization

### Change Colors
Edit `src/styles/variables.css`:
```css
:root {
  --primary-blue: #4a90e2;
  --secondary-green: #52c878;
  /* ... etc */
}
```

### Modify Psychologists
Edit `src/pages/PsychologistsPage.js` - update the `psychologists` array with real data.

### Update Contact Information
Search for phone numbers and email addresses throughout the codebase to update contact details.

## 📈 Performance

The website is optimized for:
- Fast loading times
- Smooth animations (respecting user preferences)
- Minimal dependencies
- Efficient CSS with CSS variables

## 🧪 Testing

Run tests with:
```bash
npm test
```

## 📚 Resources & References

- [NAMI Mental Health Resources](https://www.nami.org)
- [National Suicide Prevention Lifeline](https://suicidepreventionlifeline.org)
- [WCAG Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)

## 🤝 Contributing

When contributing, please ensure:
- Language remains supportive and non-judgmental
- All content is reviewed for triggers or harmful content
- Accessibility is maintained
- New features follow the established design system

## 📝 License

This project is dedicated to mental health support and suicide prevention.

## ⚠️ Critical Disclaimer

**This website does not replace emergency services or professional mental health treatment.**

If you or someone you know is in immediate danger:
- **Call 911** (US Emergency Services)
- **Go to the nearest Emergency Room**
- **Call 1-800-273-8255** (National Suicide Prevention Lifeline)

## 💚 Final Message

This platform is built with compassion for everyone struggling with mental health challenges. Every person deserves support, respect, and hope. If you're reading this and struggling, please reach out. Help is available. You matter.

---

**Built with ❤️ for mental health awareness and suicide prevention**
