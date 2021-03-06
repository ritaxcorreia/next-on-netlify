// Get the NextJS distDir specified in next.config.js
const { join } = require("path");
const getNextConfig = require("./getNextConfig");

const getNextDistDir = ({ nextConfigPath }) => {
  const nextConfig = getNextConfig();

  return join(".", nextConfig.distDir);
};

module.exports = getNextDistDir;
