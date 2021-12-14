export default {
  name: "page",
  title: "Secondary Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: "weight",
      title: "Page Weight",
      type: "number",
      description:
        "Give the page a weight if order matters in the navigation. Lower numbers are listed first."
    },
    {
      name: "supertitle",
      title: "Hero line 1",
      description: "The first line of small text in the hero.",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "mainTitle",
      title: "Hero line 2",
      description: "The second line of larger text in the hero.",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "description",
      title: "Hero line 3",
      description: "The third line of smaller text in the hero.",
      type: "string",
      validation: Rule => Rule.required()
    }
  ]
};
