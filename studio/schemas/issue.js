export default {
  name: "issue",
  title: "Issue",
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
    },
    {
      name: "externalLinkText",
      title: "External Link Text",
      description: "If this issue links to an external site, you may modify the text for the warning popup.",
      type: "string"
    }
  ]
};
