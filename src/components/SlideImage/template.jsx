import React from "react";

export const SlideImageBlockTemplate = {
  name: "slideImage",
  label: "Slide Image",
  fields: [
    {
      name: "images",
      label: "Images",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: item.title,
        }),
      },
      fields: [
        {
          name: "title",
          label: "Title",
          type: "string",
        },
        {
          name: "image",
          label: "Image",
          type: "image",
        },
      ],
    },
  ],
};
