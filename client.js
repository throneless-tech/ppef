const sanityClient = require("@sanity/client");

module.exports = sanityClient({
  projectId: PROCESS.env.SANITY_PROJECT_ID,
  dataset: PROCESS.env.SANITY_DATASET,
  useCdn: false
});
