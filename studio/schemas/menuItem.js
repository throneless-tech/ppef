export default {
  name: "menuItem",
  title: "Menu Item",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "The text that show for the name of this menu item. For instance: About us",
      validation: Rule => Rule.required()
    },
    {
      name: "link",
      title: "Link",
      type: "url",
      validation: Rule => Rule.required(),
      validation: Rule => Rule.uri({
        allowRelative: true
      })
    },
  ]
}