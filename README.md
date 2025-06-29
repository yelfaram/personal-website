# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, Tailwind CSS, and Vite. Features a clean design with subtle gamified elements and smooth micro-interactions.

## 🚀 Features

- **Modern Tech Stack**: React 19, TypeScript, Tailwind CSS, Vite
- **Responsive Design**: Mobile-first approach with beautiful layouts
- **Fast Performance**: Optimized with Vite and modern build tools
- **SEO Friendly**: Structured for search engine optimization

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (Button, Card, Badge)
│   ├── Navigation.tsx  # Main navigation component
│   ├── ProgressBar.tsx # Animated progress bars
│   └── AchievementBadge.tsx # Gamified badges
├── pages/              # Page components
│   ├── Home.tsx        # Landing page with hero section
│   ├── Projects.tsx    # Project showcase with filtering
│   └── Contact.tsx     # Contact form and information
├── lib/                # Utility functions
│   └── utils.ts        # Tailwind CSS utilities
├── assets/             # Static assets
│   ├── images/         # Project images and photos
│   └── videos/         # Project demos and videos
└── App.tsx             # Main application component
```

## 🛠️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd personal-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎨 Customization

### Personal Information

1. Update the profile information in `src/pages/Home.tsx`
2. Add your profile photo to `src/assets/images/`
3. Update contact information in `src/pages/Contact.tsx`

### Projects

1. Edit the projects array in `src/pages/Projects.tsx`
2. Add project images to `src/assets/images/`
3. Add project demo videos to `src/assets/videos/`

### Styling

- The project uses Tailwind CSS for styling
- Custom animations are defined in `tailwind.config.js`
- Dark mode is automatically supported

### Components

- All UI components are in `src/components/ui/`
- Components follow shadcn/ui patterns for consistency
- Easy to customize with Tailwind classes

## 📱 Pages

### Home Page

- Hero section with profile photo space
- About section with skills and experience
- Statistics section with animated counters
- Social media links

### Projects Page

- Project showcase with filtering (All/Featured)
- Detailed project modals with images/videos
- Technology badges for each project
- Direct links to GitHub and live demos

### Contact Page

- Contact form with validation
- Contact information cards
- Social media links
- Availability status indicator

## 🎮 Gamified Elements

- **Progress Bars**: Animated skill progress indicators
- **Achievement Badges**: Unlockable achievements for portfolio visitors
- **Micro-interactions**: Hover effects, smooth transitions, and animations
- **Statistics**: Dynamic counters and progress tracking

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

The built files in the `dist` folder can be deployed to any static hosting service:

- Netlify
- GitHub Pages
- Firebase Hosting
- AWS S3

## 🧪 Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔧 Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **React Router** - Navigation
- **Lucide React** - Icons
- **Vercel** - Deployment (recommended)

---

Built with ❤️ using modern web technologies
