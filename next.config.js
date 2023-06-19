module.exports = {
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/<repository-name>/" : "",
  // Replace <repository-name> with the name of your GitHub repository
};
