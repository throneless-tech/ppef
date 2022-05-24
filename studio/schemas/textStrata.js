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
                  type: 'url'
                }
              ]
            },
            {
              name: 'button',
              type: 'object',
              title: 'button',
              blockEditor: {
                icon: () => 'Bu'
              },  
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
