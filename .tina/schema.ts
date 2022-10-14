import { defineSchema, TinaTemplate } from "@tinacms/cli";

const HomepageHeroTemplate: TinaTemplate = {
  label: "Homepage Hero",
  name: "homepageHero",
  fields: [
    {
      label: "Title",
      name: "title",
      type: "string",
    },
    {
      label: "Description",
      name: "description",
      type: "rich-text",
    },
    {
      label: "Hero Image",
      name: "heroImage",
      type: "image",
    },
  ],
};

const ImageBlockTemplate: TinaTemplate = {


  label: 'Image block',
  name: 'image',
  fields: [
    {
      label: 'Text on Image',
      name: 'mainTitle',
      type: 'rich-text',
    },  
     {
      label: 'Image List',
      name: 'imageList',
      type: 'object',
      list: true,
      fields: [
        {
          label: 'Hero Image',
          name: 'heroImage',
          type: 'image',
        },
        {
          label: 'Button on Image',
          name: 'buttonTitle',
          type: 'string',
        },
        {
          label: 'Link',
          name: 'buttonLink',
          type: 'string',
        },
        {
          label: 'Mobile Image',
          name: 'mobileImage',
          type: 'image',
        },
      ],
    },
  ],
  };
const TwoImagesBlockTemplate: TinaTemplate = {


label: 'Two images block',
name: 'twoImages',
fields: [
  {
    label: 'Image List',
    name: 'imageList',
    type: 'object',
    list: true,
    fields: [
      {
        label: 'Hero Image',
        name: 'heroImage',
        type: 'image',
      },
      {
        label: 'Button on Image',
        name: 'buttonTitle',
        type: 'string',
      },
      {
        label: 'Text on Image',
        name: 'mainTitle',
        type: 'string',
      },
      {
        label: 'Link',
        name: 'buttonLink',
        type: 'string',
      },
    ],
  },
],

};

const ImageTwoBlockTemplate: TinaTemplate = {


  label: 'Images Two block',
  name: 'imageTwo',
  fields: [
    {
      label: 'Image List',
      name: 'imageList',
      type: 'object',
      list: true,
      fields: [
        {
          label: 'Hero Image',
          name: 'heroImage',
          type: 'image',
        },
        {
          label: 'Button on Image',
          name: 'buttonTitle',
          type: 'string',
        },
        {
          label: 'Text on Image',
          name: 'mainTitle',
          type: 'string',
        },
        {
          label: 'Link',
          name: 'buttonLink',
          type: 'string',
        },
      ],
    },
  ],
  
  };
const SpacingBlockTemplate: TinaTemplate = {
  name: "spacing",
  label: "Spacing",
  fields: [
    {
      name: "size",
      label: "Spacing Size",
      type: "string",
      ui: {
        component: "radio-group",
        direction: "horizontal",
        description: "Choose the height of the spacing block",
        options: [
          { label: "XS", value: "xs" },
          { label: "S", value: "s" },
          { label: "M", value: "m" },
          { label: "L", value: "l" },
          { label: "XL", value: "xl" },
          { label: "XXL", value: "xxl" },
          { label: "XXXL", value: "xxxl" },
        ],
      },
    },
  ],
};


const ContentVideoTemplate: TinaTemplate = {
  label: 'Content Video ',
  name: 'contentVideo',
  fields: [
    {
      label: 'Video URL',
      name: 'cvideoPlayer',
      type: 'string',
    },
  ],
};

export default defineSchema({
  collections: [
    {
      label: "Blog Posts",
      name: "blogPost",
      path: "content/blog",
      fields: [
        {
          name: "slug",
          label: "Internationalization Key",
          type: "string",
          description: "A key that connects the English and Dutch version of the pages."
        },
        {
          name: "locale",
          label: "Language",
          type: "string",
          ui: {
            component: "select",

            options: [
              { label: "English", value: "en" },
              { label: "Dutch", value: "nl" },
            ],
          },
        },
        {
          name: "seo",
          label: "SEO",
          type: "object",
          fields: [
            {
              type: "string",
              label: "Title",
              name: "title",
            },
            {
              type: "string",
              label: "Description",
              name: "description",
            },
            {
              type: "object",
              label: "Meta Tags",
              name: "meta",
              list: true,
              fields: [
                {
                  type: "string",
                  label: "Name",
                  name: "name",
                  ui:{
                    component: "select",
        
                    options: [
                      { label: "keywords", value: "keywords" },
                      { label: "author", value: "author" },
                      { label: "rating", value: "rating" },
                      { label: "robots", value: "robots" },
                    ],
                  },
                },
                {
                  type: "string",
                  label: "Content",
                  name: "content",
                },
              ],
              
            },
          ],
        },
        {
          label: "Main Title",
          name: "mainTitle",
          type: "string",
        },
        {
          label: "Category",
          name: "category",
          type: "string",
        },
        {
          label: "Hero Image",
          name: "heroImage",
          type: "image",
        },
        {
          label: "Date",
          name: "date",
          type: "string",
        },
        {
          label: "Title",
          name: "title",
          type: "string",
        },
        {
          label: "Paragraph",
          name: "paragraph",
          type: "rich-text",
        },
        {
          label: "Has Button",
          name: "hasButton",
          type: "boolean",
        },
        {
          label: "Button",
          name: "button",
          type: "string",
        },
        {
          label: "Link",
          name: "link",
          type: "string",
        },
      ],
    },
    {
      label: "Pages",
      name: "pages",
      path: "content/pages",
      fields: [
        {
          name: "slug",
          label: "Internationalization Key",
          type: "string",
          description: "A key that connects the English and Dutch version of the pages."
        },
        {
          name: "locale",
          label: "Language",
          type: "string",
          ui: {
            component: "select",

            options: [
              { label: "English", value: "en" },
            ],
          },
        },
        {
          name: "seo",
          label: "SEO",
          type: "object",
          fields: [
            {
              type: "string",
              label: "Title",
              name: "title",
            },
            {
              type: "string",
              label: "Description",
              name: "description",
            },
            {
              type: "object",
              label: "Meta Tags",
              name: "meta",
              list: true,
              fields: [
                {
                  type: "string",
                  label: "Name",
                  name: "name",
                },
                {
                  type: "string",
                  label: "Content",
                  name: "content",
                  ui:{
                    component: "select",
        
                    options: [
                      { label: "keywords", value: "keywords" },
                      { label: "author", value: "author" },
                      { label: "rating", value: "rating" },
                      { label: "robots", value: "robots" },
                    ],
                  },
                },
              ],
            },
          ],
        },
        {
          label: "Page Blocks",
          name: "pageBlocks",
          type: "object",
          list: true,
          templates: [SpacingBlockTemplate, HomepageHeroTemplate, TwoImagesBlockTemplate,ImageBlockTemplate,ImageTwoBlockTemplate,ContentVideoTemplate],
        },
      ],
    },
  ],
});
