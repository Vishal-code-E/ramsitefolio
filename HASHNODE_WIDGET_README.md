# Hashnode Blog Widget

This directory contains a complete Hashnode blog widget integration for your Next.js portfolio.

## Files Created

- `types/hashnode.ts` - TypeScript interfaces for Hashnode API responses
- `lib/hashnode.ts` - Utility functions for fetching posts from Hashnode GraphQL API
- `app/components/HashnodeBlogWidget.tsx` - Main React component

## Usage

Import and use the widget in any page or component:

```tsx
import HashnodeBlogWidget from './components/HashnodeBlogWidget';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <HashnodeBlogWidget 
        maxPosts={5}
        showTags={true}
        className="max-w-7xl mx-auto"
      />
    </div>
  );
}
```

## Props

- `maxPosts?: number` - Number of posts to display (default: 5)
- `showTags?: boolean` - Whether to show post tags (default: true)
- `className?: string` - Additional CSS classes

## Features

- ✅ Responsive grid layout (1-3 columns based on screen size)
- ✅ Loading skeletons while fetching data
- ✅ Error handling with retry functionality
- ✅ Hover effects and smooth animations
- ✅ Optimized images using Next.js Image component
- ✅ Opens posts in new tab when clicked
- ✅ Shows post metadata (date, read time, tags)
- ✅ Truncated descriptions with proper line clamping
- ✅ Link to view all posts on your Hashnode blog

## Configuration

The widget is configured to fetch from:
- Blog: `agenticaiavataq.hashnode.dev`
- API: `https://gql.hashnode.com`

To use with a different Hashnode blog, update the `BLOG_HOST` constant in `lib/hashnode.ts`.

## GraphQL Query

The widget fetches the following data for each post:
- title
- brief (description)
- url
- publishedAt
- coverImage
- readTimeInMinutes
- tags (id, name, slug)

## Styling

The component uses Tailwind CSS with a dark theme optimized for your portfolio:
- Dark background with subtle transparency effects
- Gradient accents and hover states
- Responsive typography and spacing
- Loading animations and error states

## Error Handling

- Network errors are caught and displayed with retry functionality
- GraphQL errors are properly parsed and shown to users
- Fallback states for missing data (no cover image, no posts, etc.)

## Performance

- Uses Next.js Image component for optimized image loading
- Implements proper loading states to prevent layout shift
- Lazy loading for images with appropriate sizing
- Efficient re-rendering with proper dependency arrays