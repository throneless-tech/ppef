export default {
  name: "healthcareNavigator",
  title: "Healthcare Navigator",
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
      name: "standoutTitle",
      title: "Standout Title",
      description:
        "The title in the standout strata. If this is used, the standout text must be filled in as well.",
      type: "string"
    },
    {
      name: "standoutText",
      title: "Standout Text",
      description:
        "The text in the standout strata. If this is used, the standout title must be filled in as well.",
      type: "array",
      of: [{ type: "block" }]
    },
    {
      name: "navigators",
      title: "Navigators",
      description: "Add and edit navigators here.",
      type: "array",
      of: [{ type: "navigator" }]
    }
  ]
};
