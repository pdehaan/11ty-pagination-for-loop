const del = require("del").sync;

module.exports = eleventyConfig => {
  del("www");
  eleventyConfig.addFilter("inspect", require("util").inspect);
  eleventyConfig.addFilter("keys", obj => Object.keys(obj));

  return {
    dir: {
      input: "src",
      output: "www"
    }
  }
}