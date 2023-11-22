export default {
  name: "textStrata",
  type: "object",
  title: "Text Strata",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ 
        type: "block",
        marks: {
          annotations: [
            {
              name: 'link',
              type: 'object',
              title: 'link',
              fields: [
                {
                  name: 'url',
                  type: 'url',
                  validation: (Rule) =>
                    Rule.uri({
                      allowRelative: true, // Allow relative links
                      relativeOnly: false, // Force only relative links
                      scheme: ["https", "http", "mailto"], // Default is ["https", "http"]
                    }),
                },
                {
                  name: "externalLinkText",
                  title: "External Link Text",
                  description: "If this workshop links to an external site, you may modify the text for the warning popup.",
                  type: "string"
                }
              ],
            },
            {
              name: 'button',
              type: 'object',
              title: 'button',
              icon: () => 'Bu',
              fields: [
                {
                  name: 'url',
                  type: 'url'
                }
              ]
            },
          ]
        }
      }],
      validation: Rule => Rule.required()
    },
    {
      name: "backgroundColor",
      title: "Background Color",
      description:
        "Whether the section has a plain white our criss-cross blue background.",
      type: "string",
      options: {
        list: [
          { title: "White", value: "white" },
          { title: "Blue", value: "blue" }
        ],
        layout: "radio"
      },
      validation: Rule => Rule.required()
    }
  ]
};
