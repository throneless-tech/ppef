export default {
  name: "gallery",
  type: "object",
  title: "Gallery",
  fields: [
    {
      name: "images",
      type: "array",
      title: "Images",
      of: [
        {
          name: "image",
          type: "image",
          title: "Image",
          options: {
            hotspot: true
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text"
            }
          ]
        }
      ],
      options: {
        layout: "grid"
      }
    }
  ],
  preview: {
    select: {
      media: 'images',
      title: 'alt'
    },
    prepare(selection) {
      const { media } = selection;
      return {
        title: `Image gallery`,
        // subtitle: `Alt text: ${media[0].alt}`,
        media: media[0]
      };
    }
  }
};
