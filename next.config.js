const path = require("path");
const withFonts = require('next-fonts');
module.exports = withFonts({
  experimental: {
    optimizeFonts: true,
  },
  webpack(config, options) {
    config.resolve.alias = Object.assign({}, config.resolve.alias, {
      "react-pdf": "react-pdf/dist/entry.noworker.js"
    });
   
    config.resolve.alias["@"] = path.join(__dirname, "src");
    return config;
  },
  images: {
    domains: ["images.unsplash.com"],
  },
});
