export default {
  name: "imageStrata",
  type: "object",
  title: "Image Strata",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      validation: Rule => Rule.required()
    },
    {
      name: "alt",
      type: "string",
      title: "Title"
    }
  ]
};
