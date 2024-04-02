const withPWA = require("next-pwa")({
  dest: "public",
});

const isProd = process.env.NODE_ENV === 'production';

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    loader: "custom",
    path: isProd ? "/pikmin-bloom-checklist/" : "/",
  },
  // Set up basePath and assetPrefix for GitHub Pages
  basePath: isProd ? '/pikmin-bloom-checklist' : '',
  assetPrefix: isProd ? '/pikmin-bloom-checklist/' : '',
});
