# Sukhadia Caterers — Bluehost cPanel Deployment Guide

This website is architected as a high-performance, frontend-first Single Page Application (SPA) built with Vite, React, and Tailwind CSS. It requires **no Node.js server or backend database** to run and is fully compatible with standard shared hosting environments such as **Bluehost**, Hostinger, SiteGround, or GoDaddy.

---

## 1. Quick Build Command

Run the production build command on your local machine:

```bash
npm run build
```

This compiles all assets into the `dist/` directory with code splitting, optimized fonts, and minimal bundle sizes.

---

## 2. Bluehost Deployment Steps (via cPanel File Manager)

### Step 1: Compress the Build
1. Locate the generated `dist/` directory in your project folder.
2. Ensure the following hidden and public files are present inside `dist/`:
   - `index.html`
   - `.htaccess` *(Crucial for handling direct URL refreshes and routes like `/about` or `/services`)*
   - `404.html`
   - `robots.txt`
   - `sitemap.xml`
   - `favicon.svg`
   - `assets/` directory (containing JavaScript and CSS bundles)
3. Select all items **inside** the `dist/` folder and compress them into a single `dist.zip` file.

### Step 2: Access Bluehost cPanel
1. Log in to your **Bluehost Account** (`my.bluehost.com`).
2. Navigate to **Advanced** or **cPanel**.
3. Open **File Manager** under the *Files* section.
4. In File Manager settings (top right gear icon), ensure **"Show Hidden Files (dotfiles)"** is checked.

### Step 3: Upload and Extract
1. Open the target document root:
   - For primary domain: `/public_html/`
   - For a subdomain or add-on domain: `/public_html/yoursubdomain/`
2. If older website files exist, back them up and remove them.
3. Click **Upload** at the top bar and select your `dist.zip`.
4. Once the upload bar turns green (100%), return to File Manager.
5. Right-click `dist.zip` and select **Extract**.
6. Verify that `.htaccess` and `index.html` are located directly in your document root.

### Step 4: Verify HTTPS & SSL
1. In Bluehost cPanel, go to **Security** > **SSL/TLS Status**.
2. Ensure the Let's Encrypt / AutoSSL certificate is active for your domain.
3. Enable **"Enforce HTTPS"** in Bluehost domain management.

---

## 3. How Direct Route Refreshes Work (.htaccess)

The included `.htaccess` file provides standard Apache mod_rewrite rules that forward all incoming traffic to `index.html`, allowing React Router to handle client-side URLs seamlessly:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 4. Configuring Business Details & WhatsApp Number

To customize contact numbers, email addresses, or the business WhatsApp coordination line:

1. Open `src/config/brand.ts`.
2. Update:
   - `whatsappNumber`: Set to the verified client number with country code without spaces (e.g., `"919825000000"`).
   - `hasConfiguredWhatsapp`: Set to `true`.
   - `phone`: Direct consultation hotline.
   - `email`: Official inquiry email address.
   - `address`: Headquarters address or operational coverage area.
3. Run `npm run build` and re-upload the `dist/` contents.
