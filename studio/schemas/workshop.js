export default {
  name: "workshop",
  title: "Workshop",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: Rule => Rule.required()
    },
    {
      name: "link",
      title: "Link",
      type: "url",
      validation: Rule => Rule.required()
    }
  ]
};
