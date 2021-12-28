const importAlias = {
  static: "./static",
  types: "./src/types",
  pages: "./src/pages",
  components: "./src/components",
};

module.exports = function (api) {
  api.cache(true);

  return {
    presets: ["babel-preset-expo"],
    plugins: [["module-resolver", { alias: importAlias }]],
  };
};
