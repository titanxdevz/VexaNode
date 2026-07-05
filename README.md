<div align="center">

# VexaNode

**Enterprise-grade hosting storefront and client portal built with Next.js 14 and Supabase.**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ecf8e?style=flat-square&logo=supabase)](https://supabase.com/)
[![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](./LICENSE)

[Live Demo](https://vexanode.cloud) · [Report a Bug](https://github.com/Ayushisingh09/VexaNode/issues) · [Request a Feature](https://github.com/Ayushisingh09/VexaNode/issues)

![Visitor Count](https://visitor-badge.laobi.icu/badge?page_id=titanxdevz.VexaNode)
</div>

---

## Overview

VexaNode is an open-source hosting storefront and billing platform. It provides a complete customer-facing portal for purchasing and managing game servers, VPS instances, Lavalink nodes, and web hosting — paired with an admin panel for managing users, orders, and support tickets.

The frontend is built on Next.js 14 App Router with a glassmorphic dark-theme design. The backend uses Supabase (PostgreSQL) for persistence, NextAuth.js for authentication, and Cashfree for payment gateway integration.

---

## Features

- **Storefront** — Interactive landing pages for VPS, game servers, Lavalink nodes, web hosting, and domains with live billing frequency calculators and location selectors.


- **Ticket System** — Create, reply to, and track support tickets with priority states.
- **Admin Panel** — Order management, ticket queue, system metrics, and global configuration controls (currency rates, discount tiers, storefront toggles).
- **Domain Checker** — Integrates with a domain availability API with a frosted-glass search UI.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Database | Supabase (PostgreSQL) |
| Auth | NextAuth.js v4 |
| Payments | Cashfree Gateway |
| Styling | Tailwind CSS + Framer Motion |
| Deployment | Vercel / PM2 + Nginx |

---

## Project Structure

```
VexaNode/
├── app/
│   ├── api/                    # Route handlers
│   │   ├── admin/              # Admin data, settings, and actions
│   │   ├── auth/               # NextAuth config and user registration
│   │   ├── domains/            # Domain availability check
│   │   ├── lavalink/           # Lavalink node stats
│   │   ├── orders/             # Order submission
│   │   ├── payments/           # Cashfree gateway config
│   │   ├── tickets/            # Ticket CRUD and replies
│   │   └── user/               # Session profile retrieval
│   ├── components/             # Shared UI components (Navbar, FAQ, Pricing)
│   ├── config/                 # Theme variables and nav mappings

│   ├── (pages)/                # Public-facing storefront pages
│   │   ├── vps/
│   │   ├── games/
│   │   ├── lavalink/
│   │   ├── domains/
│   │   └── webhosting/
│   └── (legal)/                # Policy and legal pages (TOS, SLA, AUP, etc.)
├── lib/                        # Supabase client helpers and query utilities
├── public/                     # Static assets
├── types/                      # TypeScript interface definitions
└── setup_database.sql          # Supabase schema setup script
```

---

## Database Schema

All tables live in the `public` schema of your Supabase project. Run `setup_database.sql` in the Supabase SQL Editor to initialize them.

**Tables:**

- `users` — Core user records (NextAuth adapter)
- `accounts` — OAuth provider accounts linked to users
- `sessions` — Active JWT sessions
- `verification_tokens` — Email verification tokens
- `profiles` — Extended user profiles (status, admin flag, join date)
- `orders` — Service orders with proof upload and expiry tracking
- `tickets` — Support ticket records with priority and status
- `ticket_replies` — Append-only reply log for each ticket
- `settings` — Key/value store for global admin configuration (JSONB values)

A PostgreSQL trigger (`on_auth_user_created`) automatically creates a `profiles` row on first user insert.

---

## API Reference

| Endpoint | Method | Auth | Description |
|---|---|---|---|
| `/api/auth/register` | `POST` | Public | Create a new credentials-based user |
| `/api/user/data` | `GET` | Session | Fetch active orders and profile for current user |
| `/api/orders/create` | `POST` | Session | Submit a new service order |
| `/api/tickets` | `GET`, `POST` | Session | List tickets or create a new one |
| `/api/tickets/[id]` | `GET` | Session | Fetch a single ticket and its replies |
| `/api/tickets/[id]/reply` | `POST` | Session | Append a reply to a ticket |
| `/api/admin/data` | `GET` | Admin | Pull user list, order history, ticket queue, and metrics |
| `/api/admin/settings` | `POST` | Admin | Update global platform configuration |
| `/api/domains/check` | `GET` | Public | Check domain name availability |

---

## Getting Started

### Prerequisites

- Node.js v18 or later
- A [Supabase](https://supabase.com/) project
- Discord and Google OAuth applications (optional, for social login)

### Local Setup

```bash
# 1. Clone the repository
git clone https://github.com/Ayushisingh09/VexaNode.git
cd VexaNode

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env.local
# Fill in your values (see Environment Variables below)

# 4. Initialize the database
# Run setup_database.sql in your Supabase SQL Editor

# 5. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

Create a `.env.local` file in the project root:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL="https://<project-id>.supabase.co"
SUPABASE_SERVICE_ROLE_KEY="<supabase-service-role-key>"

# NextAuth
NEXTAUTH_SECRET="<random-32-char-secret>"
NEXTAUTH_URL="http://localhost:3000"

# Discord OAuth
DISCORD_CLIENT_ID="<discord-client-id>"
DISCORD_CLIENT_SECRET="<discord-client-secret>"

# Google OAuth
GOOGLE_CLIENT_ID="<google-client-id>"
GOOGLE_CLIENT_SECRET="<google-client-secret>"
```

---

## Deployment

### Vercel (Recommended)

1. Push your repository to GitHub.
2. Import the project into [Vercel](https://vercel.com/).
3. Add all environment variables in **Project Settings → Environment Variables**.
4. Deploy. Vercel handles edge functions, static optimization, and SSL automatically.

### Self-Hosted (PM2 + Nginx)

```bash
# Build and start with PM2
npm run build
pm2 start npm --name "vexanode" -- start
pm2 save
```

Nginx reverse proxy config (`/etc/nginx/sites-available/vexanode.cloud`):

```nginx
server {
    listen 80;
    server_name vexanode.cloud www.vexanode.cloud;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/vexanode.cloud /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

Use [Certbot](https://certbot.eff.org/) to provision a free SSL certificate.

---

## Security Notes

- All protected API routes validate sessions with `getServerSession(authOptions)` server-side before any database access.
- Supabase is accessed via the service role client exclusively from server-side route handlers — never exposed to the client.
- Passwords are never returned in any API response payload.
- RLS (Row Level Security) is intentionally bypassed server-side via the service role client; permission checks are enforced at the Next.js layer.

---

## Contributing

Contributions are welcome. Please open an issue first to discuss what you'd like to change. Pull requests should target the `main` branch.

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/your-feature`)
3. Commit your changes (`git commit -m 'feat: add your feature'`)
4. Push to your branch (`git push origin feat/your-feature`)
5. Open a pull request

---

## Contributors

- [Ayushisingh09](https://github.com/Ayushisingh09) — Core developer, authentication systems, database architecture
- [titanxdevz](https://github.com/titanxdevz) — Platform infrastructure, server operations

---

## License

[MIT](./LICENSE) © VexaNode Contributors
