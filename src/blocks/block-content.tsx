import { Block } from 'payload'

const BlockContent: Block = {
  slug: 'blockContent',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
    },
  ],
}

export default BlockContent
