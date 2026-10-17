# Akshay C P — Portfolio

3D interactive portfolio built with React, TypeScript, Three.js and GSAP.

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Customize
- All text (about, timeline, projects, skills, links): `src/config.ts`
- Tech stack icons: `src/components/TechStackNew.tsx`
- Project images: `public/images/` (then update the `image` path in `config.ts`)
- Mobile profile photo: replace `public/images/profile.svg` (or point `src/components/Landing.tsx` to your own image)
- Resume: replace `public/Akshay_Resume.pdf`

## Deploy (free)
Push to GitHub, import the repo on https://vercel.com, and deploy. No environment variables needed.

Based on an MIT-licensed open-source 3D portfolio template (see LICENSE).
