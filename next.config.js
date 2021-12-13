const client = require("./client");
const withFonts = require("next-fonts");

module.exports = withFonts({
  exportPathMap: async function(defaultPathMap) {
    let paths = {};
    const pubPaths = await client
      .fetch('*[_type == "publication" && defined(slug)].slug.current')
      .then(data =>
        data.reduce(
          (acc, slug) => ({
            "/": { page: "/" },
            ...acc,
            [`/publication/${slug}`]: {
              page: "/publication/[slug]",
              query: { slug }
            }
          }),
          defaultPathMap
        )
      )
      .catch(console.error);

    const pagePaths = await client
      .fetch('*[_type == "page" && defined(slug)].slug.current')
      .then(data =>
        data.reduce(
          (acc, slug) => ({
            "/": { page: "/" },
            ...acc,
            [`/${slug}`]: {
              page: "/[slug]",
              query: { slug }
            }
          }),
          defaultPathMap
        )
      )
      .catch(console.error);

    paths = { ...pubPaths, ...pagePaths };
    return paths;
  }
});
