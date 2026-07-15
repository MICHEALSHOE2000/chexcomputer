# CHEX Computers

Production-ready catalogue website for CHEX Computers Ltd, built with React, TypeScript, Next.js-compatible routing, and Vinext.

## Included

- 227 foreign-used laptop listings
- Search, brand, category, and availability filters
- Paginated product catalogue
- Individual product specification pages
- WhatsApp enquiry buttons
- Responsive desktop and mobile layouts
- Product imagery with CHEX-supplied photos preferred where available
- No product prices
- No NeoStore product links

## Requirements

- Node.js 22.13 or newer
- npm

## Local development

```bash
npm install
npm run dev
```

Open the local address printed in the terminal.

## Production build

```bash
npm run build
npm run start
```

The included production scripts target a Linux build environment such as Cloudflare or a Linux CI runner.

## Catalogue data

The complete catalogue is stored in:

```text
app/data/catalogue.generated.json
```

Product transformation, categorisation, images, and URL slugs are handled in:

```text
app/data/products.ts
```

## Main folders

```text
app/                 Pages, components, styling, and catalogue data
public/products/     CHEX-supplied product photography
scripts/             Build, validation, and catalogue-import scripts
worker/              Vinext/Cloudflare worker entry point
```

## GitHub upload

1. Extract the ZIP.
2. Create an empty GitHub repository.
3. Open a terminal inside the extracted folder.
4. Run:

```bash
git init
git add .
git commit -m "Add CHEX Computers website"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## Important image note

CHEX-supplied photos are stored locally in `public/products`. Other catalogue entries use model-specific remote image thumbnails. Replace those remote images with CHEX photographs whenever exact available-unit photos become available.
