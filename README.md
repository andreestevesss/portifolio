# Andre Esteves — Portfolio

Personal portfolio site built with Next.js 14, TypeScript, and Tailwind CSS.

## Deploy to Vercel (5 minutes)

1. Push this repo to GitHub
2. Go to vercel.com → New Project → Import your repo
3. Click Deploy — done. Vercel auto-detects Next.js.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Customize

- **Your photo**: replace `public/andre.jpg` with any image
- **Resume PDF**: drop your resume as `public/resume.pdf` (the Download Resume button links to it)
- **Content**: edit the data inside each component in `app/components/`
- **Colors**: the teal accent is `#00bcd4` — search & replace to change it

## Structure

```
app/
  page.tsx              ← main page, imports all sections
  components/
    Navbar.tsx          ← sticky nav, transparent over hero
    Hero.tsx            ← full-bleed photo hero
    About.tsx           ← bio, info table, skill bars
    Resume.tsx          ← timeline, certs, tools
    Portfolio.tsx       ← project cards
    Contact.tsx         ← contact info + form
public/
  andre.jpg             ← your photo
  resume.pdf            ← add your resume here
```
