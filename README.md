# Davax Systems — Official Website

> **Websites. Systems. Digital Solutions.**  
> Practical, reliable digital products built for real businesses and organizations.

This repository contains the complete, production-grade company website for **Davax Systems**, built with React 19, Vite, TypeScript, and Tailwind CSS. It features an interactive software architecture visual, service and solution frameworks, selected case project architectures, a client intake pipeline, and a dedicated **Admin Portal** with an authentication panel for uploading and managing the company logo.

---

## 🔐 Admin Portal & Access Credentials

The website includes a protected **Admin Panel** where the owner can upload, preview, and apply the official company logo across the entire site.

### How to Access the Admin Login Panel:
1. Click **"Admin / Upload Logo"** in the website footer, **OR**
2. In your browser's address bar, append `#admin` to the URL:
   - Local: `http://localhost:3000/#admin`
   - Production / Vercel: `https://<your-project>.vercel.app/#admin`

### Default Admin Credentials:
| Field | Value |
| :--- | :--- |
| **Email** | `davaxsystems@gmail.com` (or `admin@davaxsystems.com`) |
| **Passcode / Password** | `davax2026` |

*(Note: There is also a **"1-Click Login with Default Credentials"** button on the login screen for instant owner access.)*

---

## 🎨 Logo Upload Features in the Admin Panel
1. **Drag-and-Drop / Browse File Upload**: Supports `.svg`, `.png`, `.webp`, or `.jpg` formats (up to 2.5 MB).
2. **Dual-Surface Live Contrast Preview**:
   - Preview against **Dark Background** (`#030712`) matching the live website.
   - Preview against **Light Background** (`#ffffff`) to verify inverted contrast.
   - Scale toggles: **Small (`sm`)**, **Medium (`md`)**, and **Large (`lg`)**.
3. **Instant Website Application**:
   - Click **"Apply to Entire Website"** to immediately update the Navbar, Footer, and all brand components live. Changes are automatically saved in browser storage.
4. **Download Ready-to-Commit Asset**:
   - Click **"Download File"** to download the uploaded logo as `logo.svg` (or `logo.png`).
   - Place this file in the `/public/` directory of the project for permanent static builds on Vercel.
5. **Reset Option**:
   - Click **"Reset"** at any time to return to the original Davax Systems typographic SVG lockup.

---

## 📞 Official Company Contacts

The website is configured with the official company contacts:

- **Email**: `davaxsystems@gmail.com`
- **Phone & WhatsApp**: `0735316885` (`+250 735 316 885`)
- **Direct WhatsApp Chat**: [wa.me/250735316885](https://wa.me/250735316885)
- **Location**: `Kigali, Rwanda · Available Globally`

All contact values are centralized in `src/data/content.ts` and synced across the contact section, SEO meta tags, and structured JSON-LD schema.

---

## 🚀 Quick Deploy to Vercel

### Option A: Deploy via Vercel Web Dashboard (Recommended)

1. **Push your code to GitHub, GitLab, or Bitbucket**:
   ```bash
   git add .
   git commit -m "Update Davax Systems website with Admin Portal"
   git push origin main
   ```

2. **Open Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new) and log in.

3. **Import Repository**:
   - Select your Davax Systems repository and click **Import**.

4. **Verify Build Settings**:
   Vercel will automatically detect the **Vite** framework from `vercel.json` and `package.json`:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install --legacy-peer-deps` (automatically configured in `vercel.json`)

5. **Deploy**:
   - Click **Deploy**.
   - Your website will build and go live within 30–60 seconds on a secure `https://<your-project>.vercel.app` URL with automated edge routing and SSL.

---

### Option B: Deploy via Vercel CLI

If you prefer deploying directly from your terminal:

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy to Preview**:
   ```bash
   vercel
   ```

4. **Deploy Directly to Production**:
   ```bash
   vercel --prod
   ```

---

## 💻 Local Development Setup

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **npm** (or **bun** / **pnpm** / **yarn**)

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser at [http://localhost:3000](http://localhost:3000).

### 4. Build for Production
```bash
npm run build
```
The optimized static build will be generated in `/dist`.

### 5. Type-Check and Lint
```bash
npm run lint
```

---

## 📁 Project Architecture & Key Files

```text
├── vercel.json                 # Vercel SPA rewrites & Vite preset
├── README.md                   # Deployment & administration documentation
├── index.html                  # SEO, metadata, Google Fonts, JSON-LD Schema
├── metadata.json               # Applet identity & platform configuration
├── package.json                # Project dependencies and npm scripts
├── vite.config.ts              # Vite + Tailwind CSS plugins
├── public/                     # Static assets directory (place logo.svg here)
└── src/
    ├── main.tsx                # React application entry point
    ├── index.css               # Tailwind CSS v4 design tokens and utilities
    ├── App.tsx                 # Root layout, router & view switcher
    ├── types/
    │   └── index.ts            # TypeScript data models
    ├── context/
    │   └── LogoContext.tsx     # Global logo management & localStorage sync
    ├── data/
    │   └── content.ts          # Centralized website copy, services & contacts
    ├── pages/
    │   └── AdminPage.tsx       # Admin Login & Logo Upload Portal
    └── components/
        ├── Navbar.tsx          # 3-Zone sticky navigation with mobile drawer
        ├── LogoPlaceholder.tsx # Modular logo component with auto-fallback
        ├── Hero.tsx            # Hero section with primary/secondary CTAs
        ├── HeroArchitectureVisual.tsx # CSS/UI digital systems architecture preview
        ├── TrustStrip.tsx      # Target audience value strip
        ├── Services.tsx        # 6 core service capability cards
        ├── Process.tsx         # 6-phase interactive development lifecycle
        ├── Solutions.tsx       # 8 operational solution category explorer
        ├── Work.tsx            # Selected work portfolio with architecture modal
        ├── About.tsx           # Company philosophy & Problem->Solution visual
        ├── WhyDavax.tsx        # 5 core technical pillars
        ├── TechStack.tsx       # Modern technology foundation cards
        ├── CTASection.tsx      # High-impact decision CTA block
        ├── ContactSection.tsx  # Project intake form with copy/email fallbacks
        └── Footer.tsx          # Semantic footer with navigation & admin access
```

---

## 🌐 Custom Domain Setup

To link your official domain (e.g., `davaxsystems.com`):
1. In your Vercel Dashboard, go to **Settings** > **Domains**.
2. Add your domain (`davaxsystems.com` and `www.davaxsystems.com`).
3. Configure the DNS records at your domain registrar:
   - **Type A**: `@` $\rightarrow$ `76.76.21.21`
   - **CNAME**: `www` $\rightarrow$ `cname.vercel-dns.com`

---

## 📄 License

© 2026 Davax Systems. All rights reserved.
