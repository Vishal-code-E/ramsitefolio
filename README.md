# 🚀 Ram's Portfolio - Modern Developer Portfolio

A sleek, interactive portfolio website showcasing my journey as a developer, featuring dynamic 3D elements, real-time blog integration, and modern web technologies.

## ✨ Features

### 🎨 **Interactive UI/UX**
- **3D Photo Gallery** - WebGL-powered infinite menu with sphere rendering
- **Animated Backgrounds** - Dynamic light rays and particle effects
- **Smooth Transitions** - Hover effects and page animations
- **Responsive Design** - Optimized for all devices and screen sizes

### 📝 **Dynamic Blog Integration**
- **Hashnode Headless CMS** - Real-time blog posts via GraphQL API
- **Auto-updating Content** - New posts appear automatically
- **Rich Metadata** - Cover images, tags, read time, and publication dates
- **External Links** - Direct links to full blog posts on Hashnode

### 🛠️ **Project Showcases**
- **GitHub Projects** - Code repositories and contributions
- **Avataq** - AI and technology projects
- **E-Cell** - Entrepreneurship and innovation work
- **Prompt Craft** - AI prompt engineering tools

### 🎯 **Modern Tech Stack**
- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **WebGL/gl-matrix** - 3D graphics and animations
- **GraphQL** - API integration for blog content

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vishal-code-E/ramsitefolio.git
   cd ramsitefolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📂 Project Structure

```
ramsitefolio/
├── app/
│   ├── components/          # React components
│   │   ├── HashnodeBlogWidget.tsx
│   │   ├── InfiniteMenu.tsx
│   │   ├── BlogSection.tsx
│   │   └── ...
│   ├── (project-pages)/     # Individual project pages
│   │   ├── github/
│   │   ├── avataq/
│   │   ├── ecell/
│   │   └── prompt-craft/
│   └── globals.css          # Global styles
├── lib/
│   └── hashnode.ts          # Hashnode API utilities
├── types/
│   └── hashnode.ts          # TypeScript interfaces
└── public/                  # Static assets
```

## 🔧 Key Components

### **InfiniteMenu** - 3D Photo Gallery
- WebGL2 rendering with sphere geometry
- Interactive photo navigation
- Smooth camera movements and transitions

### **HashnodeBlogWidget** - Dynamic Blog
- GraphQL integration with Hashnode API
- Responsive grid layout
- Loading states and error handling
- Optimized images with Next.js Image

### **Project Pages** - Work Showcases
- Individual pages for each project
- Consistent styling with light ray backgrounds
- External links and project details

## 🌐 Blog Integration

The portfolio features a headless CMS setup using Hashnode:

- **Content Source**: [agenticaiavataq.hashnode.dev](https://agenticaiavataq.hashnode.dev)
- **API Endpoint**: Hashnode GraphQL API
- **Content Type**: Technical articles, AI insights, and development tutorials
- **Updates**: Automatic content synchronization

## 🎨 Design Philosophy

- **Dark Theme** - Modern, professional aesthetic
- **Minimalist Layout** - Clean, focused content presentation
- **Interactive Elements** - Engaging user experience
- **Performance First** - Optimized loading and smooth animations

## 📱 Responsive Design

- **Mobile**: Single column layout with touch-friendly interactions
- **Tablet**: Two-column grid with optimized spacing
- **Desktop**: Full three-column layout with advanced animations

## 🚀 Deployment

The portfolio is optimized for deployment on modern platforms:

```bash
# Build for production
npm run build

# Start production server
npm start
```

Recommended platforms:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**

## 🔗 Links

- **Live Portfolio**: [Your Portfolio URL]
- **Blog**: [agenticaiavataq.hashnode.dev](https://agenticaiavataq.hashnode.dev)
- **GitHub**: [github.com/Vishal-code-E](https://github.com/Vishal-code-E)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js, TypeScript, and modern web technologies.
