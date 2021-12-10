export default {
  name: "publication",
  title: "Publication (Item)",
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
      name: "description",
      title: "Description",
      type: "text",
      validation: Rule => Rule.required()
    },
    {
      name: "date",
      title: "Publication Date",
      type: "date"
    },
    {
      name: "tags",
      title: "Tags",
      type: "tags"
    },
    {
      name: "content",
      title: "Body Content",
      type: "array",
      of: [{ type: "block" }],
      validation: Rule => Rule.required()
    },
    {
      name: "report",
      title: "Report",
      description: "Attach a PDF of the report, if there is one.",
      type: "file"
    }
  ]
};
