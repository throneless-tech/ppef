export default {
  name: "publication",
  title: "Publication (Item)",
  type: "document",
  fields: [
    {
      name: "title",
      title: "title",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      name: "date",
      title: "Publication Date",
      type: "datetime"
    },
    {
      name: "tags",
      title: "Tags",
      type: "tag"
    },
    {
      name: "content",
      title: "Body Content",
      type: "array",
      of: [{ type: "block" }]
    }
  ]
};
