const client = require("./client");
const withFonts = require("next-fonts");

module.exports = withFonts({
  exportPathMap: async function(defaultPathMap) {
    const paths = await client
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
    return paths;
  }
});
