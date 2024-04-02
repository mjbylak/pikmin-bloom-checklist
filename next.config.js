const withPWA = require("next-pwa")({
  dest: "public",
  basePath: "/pikmin-bloom-checklist",
});

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    loader: "custom",
    path: "/",
  },
});
