const path = require("path");

module.exports = {
  distDir: "./.next",
  webpack: config => {
    return {
      config,
      resolve: {
        alias: {
          "": path.resolve(__dirname),
        },
      },
    };
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};
