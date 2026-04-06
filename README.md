# ra2iqqq.github.io

This project is a static one-page resume website inspired by the structure of https://ripindensumite.github.io.

## Deploy to GitHub Pages

Repository:

https://github.com/Ra2iqqq/ra2iqqq.github.io.git

This project is configured to auto-deploy using GitHub Actions from `.github/workflows/deploy-pages.yml`.

One-time setup in GitHub:

1. Open your repository on GitHub.
2. Go to **Settings > Pages**.
3. In **Build and deployment**, set **Source** to **GitHub Actions**.

After this, every push to `main` triggers deployment.

Your site URL should be:

https://ra2iqqq.github.io/

## Run locally (recommended)

Open terminal in this folder and run:

```powershell
npm start
```

Then open:

http://localhost:5500

## Alternative

You can also open `index.html` directly in a browser, but running a local server is better for future assets/scripts.

## Customize quickly

- Edit name, role, and text in `index.html`
- Replace email links: `youremail@example.com`
- Update GitHub/LinkedIn links
