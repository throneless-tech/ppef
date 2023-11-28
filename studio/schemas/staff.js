export default {
  name: "staff",
  title: "Staff",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "image",
      title: "Image",
      type: "image"
    },
    {
      name: "email",
      title: "Email Address",
      description: "Include full email address, for instance, name@mail.org",
      type: "string"
    },
  ],
  preview: {
    select: {
      title: "name"
    }
  }
};
