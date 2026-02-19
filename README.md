# manohar Bakery

A modern, responsive bakery website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Beautiful Design**: Clean, modern UI with custom color scheme
- 📱 **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- ⏱️ **Cover Screen**: 10-second animated cover with countdown timer
- 🧭 **Navigation**: 
  - Desktop: Fixed top navigation bar
  - Mobile/Tablet: Fixed bottom navigation bar
- 🎯 **Pages**: Home, Menu, About, Contact, and Order pages
- 🎨 **Styling**: Poppins font family with custom color palette
- ⚡ **Performance**: Built with Next.js 14 for optimal performance

## Color Scheme

- **Primary Background**: #FFF4E8 (Warm cream)
- **Text Color**: #5E270B (Dark brown)
- **Font Family**: Poppins

## Project Structure

```
manohar-bakery/
├── app/                    # Next.js 14 app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── menu/              # Menu page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── order/             # Order page
├── components/            # React components
│   ├── layout/            # Layout components
│   │   ├── MainLayout.tsx # Main layout wrapper
│   │   ├── TopNavigation.tsx # Desktop navigation
│   │   ├── BottomNavigation.tsx # Mobile navigation
│   │   └── Footer.tsx     # Footer component
│   └── common/            # Common components
│       └── Cover.tsx      # Cover screen component
├── styles/                # Global styles
│   └── globals.css        # Global CSS with custom properties
├── lib/                   # Utility functions
│   └── constants.ts       # App constants
├── types/                 # TypeScript type definitions
│   └── index.ts           # Type definitions
└── public/                # Static assets
    ├── images/            # Image assets
    └── icons/             # Icon assets
```

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Features in Detail

### Cover Component
- Displays for 10 seconds on every page load
- Shows animated loading spinner and countdown timer
- Includes skip button for immediate access
- Smooth fade-in/fade-out animations

### Responsive Navigation
- **Desktop**: Fixed top navigation with full menu
- **Mobile/Tablet**: Fixed bottom navigation with icons
- Smooth transitions and hover effects

### Pages
- **Home**: Hero section, featured products, about section
- **Menu**: Categorized menu items with descriptions and prices
- **About**: Company story, values, and team information
- **Contact**: Contact information and contact form
- **Order**: Coming soon page with contact options

## Customization

### Colors
Update the color scheme in `styles/globals.css`:
```css
:root {
  --primary: #FFF4E8;    /* Background color */
  --secondary: #5E270B;  /* Text color */
}
```

### Fonts
The app uses Poppins font family. To change it, update the import in `styles/globals.css` and the font-family property.

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **CSS Modules** - Scoped styling
- **Responsive Design** - Mobile-first approach
- **Modern CSS** - CSS Grid, Flexbox, and custom properties

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary to manohar Bakery.