const withPWA = require("next-pwa")({
  dest: "public",
});

module.exports = withPWA({
  basePath: '/pikmin-bloom-checklist',
  assetPrefix: '/pikmin-bloom-checklist/',
  reactStrictMode: true,
  images: {
    loader: "custom",
    path: "/",
  },
});
