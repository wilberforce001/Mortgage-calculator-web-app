const path = require('path');

module.exports = {
  // ... other configuration options ...
  resolve: {
    fallback: {
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "util": require.resolve("util/"),
      "stream": require.resolve("stream-browserify"),
      "zlib": require.resolve("browserify-zlib"),
      "assert": require.resolve("assert/")
    }
  }
  // ... other configuration options ...
};
