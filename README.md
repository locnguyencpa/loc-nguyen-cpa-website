# Loc Nguyen CPA Website

A professional tax practice website built with Next.js and Tailwind CSS.

## Pages

- Home
- Services
- Pricing
- Get Quote
- About
- FAQ
- Contact
- Privacy Policy
- Terms of Use

## Before Launch

1. Review the draft starting prices on the Pricing page.
2. Obtain permission before publishing identifiable client names, company names, or testimonials. The current site uses anonymous client-type labels.
3. Choose and register a domain, meaning the public website address (for example, `locnguyencpa.com`), before adding it to website metadata.
4. Have the privacy policy, terms, licensing disclosures, and engagement process reviewed for your practice.
5. Obtain written approval from Fondo before publicly launching or accepting clients. Section 13 of the signed employment agreement restricts competing outside employment or activity during employment without prior written consent.
6. Ask that written approval to address ownership of the website and practice materials. The invention-assignment provisions are broad and may apply to original works or software related to Fondo's business.

## Connected

- Public contact email: `locnguyencpa@gmail.com`
- Quote questionnaire: `https://tally.so/r/0QDjK6`
- Secure document exchange: Verifyle access will be sent after the engagement letter is signed.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verify

```bash
npm run lint
npm run build -- --webpack
```

The webpack flag avoids a Turbopack port-binding limitation in some restricted development environments. Vercel can build the project normally.
