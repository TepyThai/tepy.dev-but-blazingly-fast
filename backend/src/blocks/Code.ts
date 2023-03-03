import { Block } from 'payload/types';

export const Code: Block = {
  slug: 'code',
  labels: {
    singular: 'Code',
    plural: 'Code Blocks',
  },
  fields: [
    {
      name: 'language',
      label: 'Choose Language',
      type: 'select',
      defaultValue: 'typescript',
      required: true,
      options: [
        {
          label: 'JavaScript',
          value: 'javascript',
        },
        {
          label: 'TypeScript',
          value: 'typescript',
        },
        {
          label: 'HTML',
          value: 'html',
        },
        {
          label: 'CSS',
          value: 'css',
        },
        {
          label: 'JSX',
          value: 'jsx',
        },
      ],
    },
    {
      name: 'code',
      label: 'Code',
      type: 'code',
      required: true,
      admin: {
        language: 'javascript',
      },
      unique: true,
    },
  ],
};
