module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Fichiers JS et JSX
        exclude: /node_modules/, // Ne pas traiter les dépendances
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
