export default {
  name: "settings",
  title: "Settings",
  type: "document",
  groups: [
    {
      name: 'homepage',
      title: 'Homepage',
    },
    {
      name: 'navigation',
      title: 'Navigation',
    },
  ],
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
      type: "image",
      group: "homepage",
    },
    {
      name: "impactImage",
      title: "Homepage Our Impact Image",
      description:
        "Image displayed in the 'Our Impact' strata on the homepage.",
      type: "image",
      group: "homepage",
    },
    {
      name: "approachGallery",
      title: "Homepage Our Approach Gallery",
      description:
        "Gallery of logos displayed in the 'Our Approach' strata on the homepage.",
      type: "gallery",
      group: "homepage",
    },
    {
      name: "mainNav",
      title: "Main Navigation Links",
      type: "array",
      of: [{ type: 'menuItem' }],
      group: "navigation",
    },
    {
      name: "subNav",
      title: "Secondary Navigation Links",
      type: "array",
      of: [{ type: 'menuItem' }],
      group: "navigation",
    },
    {
      name: "footerImage",
      title: "Footer Image",
      description: "Image displayed above the footer, sitewide.",
      type: "image"
    }
  ]
};
