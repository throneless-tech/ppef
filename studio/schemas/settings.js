export default {
  name: "settings",
  title: "Settings",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Site Title",
      description: "The title of the entire website.",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "heroImage",
      title: "Homepage Hero Image",
      description: "Image displayed in the homepage hero.",
      type: "image"
    },
    {
      name: "impactImage",
      title: "Homepage Our Impact Image",
      description:
        "Image displayed in the 'Our Impact' strata on the homepage.",
      type: "image"
    },
    {
      name: "approachGallery",
      title: "Homepage Our Approach Gallery",
      description:
        "Gallery of logos displayed in the 'Our Approach' strata on the homepage.",
      type: "gallery"
    },
    {
      name: "footerImage",
      title: "Footer Image",
      description: "Image displayed above the footer, sitewide.",
      type: "image"
    }
  ]
};
