# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js-based personal portfolio website deployed on GitHub Pages. It's a TypeScript application using React components with Bootstrap styling and Lottie animations. The site showcases personal information, skills, experience, education, and projects.

## Development Commands

```bash
# Install dependencies
yarn

# Start development server
yarn dev

# Build for production
yarn build

# Export static files (required for GitHub Pages deployment)
yarn export

# Start production server locally
yarn start

# Lint code and check formatting
yarn lint

# Format code with Prettier
yarn format
```

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `gh-pages` branch. The workflow builds the Next.js app and exports static files to the `out/` directory.

## Architecture

### Core Structure

- **`portfolio.ts`**: Central configuration file containing all portfolio data (personal info, skills, experience, projects, etc.)
- **`pages/`**: Next.js pages (currently only `index.tsx` and `_app.tsx`)
- **`containers/`**: Section-level components that represent major portfolio sections
- **`components/`**: Reusable UI components
- **`types/`**: TypeScript type definitions for portfolio data structures

### Key Files

- **`portfolio.ts`**: Main data configuration - modify this to update portfolio content
- **`types/sections.ts`**: TypeScript interfaces for all portfolio section data types
- **`next.config.js`**: Next.js configuration with image optimization settings
- **`.github/workflows/nextjs.yml`**: GitHub Actions workflow for automatic deployment

### Data Flow

1. Portfolio data is defined in `portfolio.ts` using types from `types/sections.ts`
2. The main page (`pages/index.tsx`) imports and passes data to section containers
3. Container components (`containers/`) render major sections using reusable components
4. Components use React dynamic imports for performance optimization

### Component Organization

- **Navigation**: Site header with menu
- **Greetings**: Hero section with personal introduction
- **Skills**: Technical skills with animations
- **Proficiency**: Skill level bars
- **Education**: Academic background
- **Experience**: Work history with company logos
- **Projects**: Portfolio projects with links
- **GithubProfileCard**: GitHub profile integration via API

## Configuration Notes

- GitHub username is configured in `portfolio.ts` under `openSource.githubUserName`
- Images are served via imgix CDN (configured in next.config.js)
- The site uses static export for GitHub Pages compatibility
- Bootstrap and custom CSS are used for styling
- Lottie animations are stored in `public/lottie/`

## Making Changes

To update portfolio content, primarily edit `portfolio.ts`. The file is well-structured with clear sections for:

- Personal greetings and descriptions
- Skills and proficiencies
- Education history
- Work experience
- Projects
- Social links

Component modifications should follow the existing patterns and maintain TypeScript type safety.
