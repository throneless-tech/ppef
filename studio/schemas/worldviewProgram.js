export default {
  name: "worldviewProgram",
  title: "Worldview Program",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Page Title",
      type: "string",
      readOnly: true
    },
    {
      name: "heroImage",
      title: "Hero image",
      type: "image"
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
    },
    {
      name: "workshops",
      title: "Workshops",
      description: "Add and edit workshops here.",
      type: "array",
      of: [{ type: "workshop" }]
    },
    {
      name: "image",
      title: "Image Strata",
      description: "The image for an image strata, if any (not required).",
      type: "image"
    },
    {
      name: "body",
      title: "Block content",
      description: "The richtext content for the page, if any (not required).",
      type: "array",
      of: [{ type: "block" }]
    }
  ]
};
