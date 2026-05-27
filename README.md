# IBI eCommerce Manager Tools

A mobile-friendly staff dashboard for quick access to the IBI operational tools. The site is built as static HTML, CSS, and JavaScript and can be hosted directly with GitHub Pages.

## Features

- Live Indian Standard Time and date at the top of the dashboard.
- Direct links to all nine IBI staff tools.
- Professional responsive layout for phones and laptops.
- Light/dark mode switch with saved preference.
- IBI favicon and prominent header brand mark using the requested `#00c5ff` on black.
- Visible application version badge (`v1.0`).

## Publish With GitHub Pages

1. Create a new GitHub repository, for example `ibi-ecommerce-manager-tools`.
2. Upload all files and the `assets` folder from this project to the repository root.
3. In GitHub, open **Settings** > **Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. Open the GitHub Pages address shown after deployment.

## Version Updates

The displayed version is set in `script.js`:

```js
const APP_VERSION = "v1.0";
```

Use a small increment such as `v1.1` or `v2.1` for minor updates and a whole-number increment such as `v2` or `v3` when significant features are introduced.

## Official Logo Replacement

The project includes an IBI-branded SVG logo because no separately uploaded official logo file was available in this workspace. To use the official company logo, replace `assets/ibi-company-logo.svg` and keep the same filename, or update the image path in `index.html`.
