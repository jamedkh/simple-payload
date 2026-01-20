import { Block } from 'payload'
import { RichText } from '@payloadcms/richtext-lexical/react'

const BlockNewsletter: Block = {
  slug: 'newsletter',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: false,
    },
    {
      name: 'description',
      type: 'richText',
      required: false,
    },
    {
      name: 'newsletterForm',
      type: 'relationship',
      relationTo: 'forms',
      required: true,
    },
  ],
}

export default BlockNewsletter
