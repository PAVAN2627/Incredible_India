# 🇮🇳 Incredible India

A modern, responsive web application showcasing the rich culture, heritage, festivals, cuisine, arts, and history of India. Built with Next.js, React, and Tailwind CSS with smooth animations and interactive elements.

![Next.js](https://img.shields.io/badge/Next.js-14.0.0-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3-06b6d4?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## 🌟 Features

- **8 Immersive Pages**
  - Home - Hero section with parallax effects
  - States - Explore all 28 Indian states with detailed information
  - Festivals - Discover 19 major Indian festivals with traditions
  - Heritage - Learn about 10 iconic monuments and historical sites
  - Cuisine - Explore regional Indian dishes and food culture
  - Arts - Experience traditional Indian art forms
  - Timeline - Historical journey through Indian empires
  - About - Project information and details

- **Modern Animations**
  - Framer Motion animations and transitions
  - GSAP parallax scrolling effects
  - Floating and floating elements
  - Card flip animations
  - Timeline reveals
  - Smooth scroll triggers

- **Responsive Design**
  - Mobile-first approach
  - Fully responsive across all devices
  - Touch-friendly interactions
  - Optimized performance

- **Interactive Components**
  - Hover effects and tooltips
  - Flip cards with reveal animations
  - Interactive modals for detailed information
  - Smooth transitions and micro-interactions
  - Live data with real images

## 🎨 Design System

### Color Palette
- **Primary Orange** - `#FF9933` (Saffron)
- **Royal Blue** - `#0066B2` (Peacock)
- **Deep Maroon** - `#800000` (Heritage)
- **Gold** - `#FFD700` (Accent)
- **Emerald** - `#32CD32` (Nature)

### Typography
- **Headings** - Playfair Display (elegant serif)
- **Body** - Poppins (clean sans-serif)
- **Devanagari** - Noto Serif Devanagari (authentic)

## 📂 Project Structure

```
incredible-india/
├── app/
│   ├── components/          # Reusable React components
│   │   ├── ArtCard.tsx
│   │   ├── ArtModal.tsx
│   │   ├── CuisineCard.tsx
│   │   ├── EnhancedImage.tsx
│   │   ├── FestivalCard.tsx
│   │   ├── FestivalModal.tsx
│   │   ├── HeroSection.tsx
│   │   ├── InteractiveMap.tsx
│   │   ├── MonumentCard.tsx
│   │   ├── Navbar.tsx
│   │   ├── StateCard.tsx
│   │   ├── StateDetailModal.tsx
│   │   └── More...
│   ├── states/              # State page
│   ├── festivals/           # Festivals page
│   ├── heritage/            # Heritage page
│   ├── cuisine/             # Cuisine page
│   ├── arts/                # Arts page
│   ├── timeline/            # Timeline page
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── public/
│   └── images/              # Local image assets
│       ├── states/          # 25 state images
│       ├── festivals/       # 19 festival images
│       ├── art/             # 12 art form images
│       ├── monuments/       # 10 monument images
│       ├── food/            # Cuisine images
│       └── backgrounds/     # Background images
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── next.config.js           # Next.js configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/PAVAN2627/Incredible_India.git
   cd Incredible_India
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📱 Pages Overview

### 🏠 Home Page
- Eye-catching hero section with parallax background
- Floating animated Indian cultural elements (lotus, diya, peacock)
- Animated tagline and call-to-action buttons
- Quick highlights linking to other sections
- Statistics section showcasing India's diversity

### 🗺️ States of India
- Interactive cards displaying all 28 Indian states
- State capital, famous food, biggest festival
- Detailed historical information
- Regional classification (North, South, East, West, Northeast)
- Beautiful state images and descriptions

### 🎉 Festivals
- **19 Major Indian Festivals** including:
  - Diwali - Festival of Lights
  - Holi - Festival of Colors
  - Navratri & Durga Puja - Goddess celebrations
  - Eid ul-Fitr - Islamic celebration
  - Baisakhi - Harvest festival
  - And 14 more...
- Festival cards with seasonal information
- Detailed traditions and customs
- Festival dates and regional celebrations
- Beautiful festival images and descriptions

### 🏛️ Heritage & Monuments
- **10 Iconic Monuments** including:
  - Taj Mahal
  - Red Fort
  - Ajanta Caves
  - Qutub Minar
  - And 6 more...
- Empire and dynasty timeline
- Historical significance and facts
- Architectural details
- High-quality monument photography

### 🍜 Cuisine
- Regional Indian dishes and delicacies
- Food culture and traditions
- Culinary ingredients and preparation methods
- Regional food cards with descriptions
- Interactive cuisine exploration

### 🎨 Arts & Culture
- Traditional Indian art forms
- Classical dance, music, and visual arts
- Artist information and historical context
- Detailed art form descriptions
- Cultural significance

### 📅 Timeline
- Historical journey through Indian empires
- Major events and milestones
- Dynasty information and rulers
- Interactive timeline visualization

## 🛠️ Technologies Used

### Frontend
- **Next.js 14.0.0** - React framework for production
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 3.3** - Utility-first CSS framework

### Animations & Effects
- **Framer Motion 10.16.4** - React animation library
- **GSAP 3.12.2** - Professional animation library
- **AOS 2.3.4** - Animate On Scroll library
- **Lottie React 2.4.0** - Lottie animation player

### Development Tools
- **ESLint** - Code quality
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📊 Data Structure

### States Data
Each state contains:
- Name, Capital, Region
- Famous Food, Biggest Festival
- Historical Information
- Detailed History
- Specialty/Highlights
- Images (card and detailed)
- Color coding

### Festivals Data
Each festival includes:
- Name, Description, Season
- Region, Icon, Colors
- Traditions and Customs
- History and Detailed History
- Images (card and detailed)

### Heritage Data
Each monument contains:
- Name, Location, Period
- Description, Detailed History
- Facts and Dynasty
- Images (card and detailed)

## 🎯 Features Implemented

✅ Fully responsive design
✅ Smooth animations and transitions
✅ Interactive modals and detail views
✅ Local image optimization
✅ SEO-friendly structure
✅ Accessibility features
✅ TypeScript type safety
✅ Performance optimized
✅ Mobile-first approach
✅ Dark mode support (in development)

## 🔄 Recent Updates

- ✅ Fixed all image loading issues - now using local images from `/public/images/`
- ✅ Removed hardcoded image mapping functions
- ✅ Implemented data-driven architecture
- ✅ Added proper TypeScript interfaces
- ✅ Fixed build errors and type checking
- ✅ Optimized component structure

## 📈 Performance

- **Fast Page Load**: Static generation with Next.js
- **Optimized Images**: Local images with proper sizing
- **Code Splitting**: Automatic by Next.js
- **CSS Optimization**: Tailwind CSS purging
- **Lazy Loading**: Images load on demand

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Pavan Mali**
- GitHub: [@PAVAN2627](https://github.com/PAVAN2627)
- Portfolio: [Visit](https://pavan-portfolio.example.com)

## 🙏 Acknowledgments

- India's rich cultural heritage for inspiration
- Framer Motion for amazing animations
- Next.js team for excellent framework
- All contributors and supporters

## 📞 Support

If you found this project helpful, please:
- ⭐ Star the repository
- 🐛 Report bugs and issues
- 💡 Suggest new features
- 📤 Share with others

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Documentation](https://react.dev)

---

**Made with ❤️ by Pavan Mali**
