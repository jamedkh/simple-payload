import HomeHero from '@/blocks/block-home-hero'
import BlockContent from '@/blocks/block-content'
import { CollectionConfig } from 'payload'
import BlockNewsletter from '@/blocks/block-newsletter'

export const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [HomeHero, BlockContent, BlockNewsletter],
    },
  ],
}
