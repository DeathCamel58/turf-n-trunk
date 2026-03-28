# Turf n Trunk

Professional landscaping business website serving Peachtree City, GA and the surrounding cities of Fayetteville, Senoia, Newnan, and Tyrone.

## Tech Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Deployment:** Cloudflare Pages (static site + Pages Functions)
- **CRM:** EspoCRM (lead capture via API)
- **Bot Protection:** Google reCAPTCHA v2

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

## Project Structure

```
app/
  layout.tsx                    # Root layout (fonts, header, footer, GTM, JSON-LD)
  page.tsx                      # Homepage
  services/
    page.tsx                    # Services index (card grid)
    [slug]/
      page.tsx                  # Individual service pages (7 services)
      content.ts                # Rich content for each service
      [city]/
        page.tsx                # City-specific landing pages (35 pages)
        city-content.ts         # Per-city intro text
  about/page.tsx                # About page
  contact/
    page.tsx                    # Contact form page
    thank-you/page.tsx          # Post-submission confirmation
  components/                   # Shared UI components
  lib/
    constants.ts                # Business info, services, config
    metadata.ts                 # SEO metadata helper
  sitemap.ts                    # Auto-generated sitemap (46 URLs)
  robots.ts                     # robots.txt
functions/
  api/
    contact.ts                  # Cloudflare Pages Function (reCAPTCHA + EspoCRM proxy)
```

## Pages

| Route | Description |
|---|---|
| `/` | Homepage with hero, services overview, trust signals, testimonials |
| `/services` | Services index grid |
| `/services/[slug]` | 7 dedicated service pages with FAQs |
| `/services/[slug]/[city]` | 35 city-specific landing pages (7 services x 5 cities) |
| `/about` | Company story, values, service area |
| `/contact` | Lead capture form with reCAPTCHA |
| `/contact/thank-you` | Post-submission confirmation |

## Building

```bash
npm run build
```

Generates a static export to the `out/` directory (52 HTML pages + sitemap.xml + robots.txt).

## Deployment

The site is deployed to **Cloudflare Pages**. The static export (`out/`) serves the site, and the `functions/` directory provides the serverless API endpoint for form submissions.

### Environment Variables (Cloudflare Pages)

Set these in the Cloudflare Pages dashboard under **Settings > Environment variables**:

| Variable | Description |
|---|---|
| `RECAPTCHA_SECRET_KEY` | Google reCAPTCHA v2 secret key |
| `ESPOCRM_API_URL` | EspoCRM LeadCapture endpoint URL |

### Client-Side Config

These values are set in `app/lib/constants.ts`:

| Constant | Description |
|---|---|
| `RECAPTCHA_SITE_KEY` | Google reCAPTCHA v2 public site key |
| `GTM_ID` | Google Tag Manager container ID (empty = disabled) |
| `SITE_URL` | Canonical site URL (used in sitemap and robots.txt) |

## Contact Form Flow

1. User fills out form on `/contact` (first name, last name, email, phone, address, message)
2. reCAPTCHA v2 checkbox must be completed
3. Form POSTs to `/api/contact` (Cloudflare Pages Function)
4. Function verifies reCAPTCHA token with Google
5. If valid, forwards lead data to EspoCRM LeadCapture API
6. User is redirected to `/contact/thank-you`

## SEO

- Per-page meta titles optimized for "[service] in [city], GA" queries
- Open Graph tags on all pages
- `LocalBusiness` JSON-LD schema in root layout
- `FAQPage` JSON-LD schema on all service and city pages
- Auto-generated `sitemap.xml` covering all 46 URLs
- `robots.txt` allowing all crawlers
- Semantic HTML with proper heading hierarchy

## Design System

**Colors:** Forest green (`#2D5A27`), bark brown (`#6B4226`), sage (`#7A9E7E`), sand (`#F5F0E8`), cream (`#FDFBF7`)

**Fonts:** Playfair Display (headings), Lato (body) via `next/font/google`
