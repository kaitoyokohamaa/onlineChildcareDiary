const path = require("path");

const nextConfig = {
  distDir: "./.next",

  webpack: (config) => {
    config.resolve.symlinks = false;

    return (
      config,
      {
        resolve: {
          alias: {
            "": path.resolve(__dirname),
          },
        },
      }
    );
  },
  images: {
    domains: [],
  },
};

module.exports = nextConfig;
