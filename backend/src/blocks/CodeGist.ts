import { Block } from 'payload/types';

export const CodeGist: Block = {
  slug: 'code',
  labels: {
    singular: 'Code',
    plural: 'Code Blocks',
  },
  fields: [
    {
      name: 'filename',
      label: 'Filename',
      type: 'text',
      required: false,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'text',
      required: false,
    },
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
        {
          label: 'TSX',
          value: 'tsx',
        },
      ],
    },
    {
      name: 'code',
      label: 'Code',
      type: 'code',
      required: true,
      admin: {
        language: 'typescript',
      },
      unique: true,
    },
  ],
};
