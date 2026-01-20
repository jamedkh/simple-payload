import { Page } from '@/payload-types'
import React from 'react'
import { RichText } from '@payloadcms/richtext-lexical/react'

type ContentProps = {
  block: Extract<NonNullable<Page['layout']>[number], { blockType: 'blockContent' }>
}

const BlockContent: React.FC<ContentProps> = ({ block }) => {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="grid gap-6 md:gap-12 text-center">
          <h2 className="text-4xl font-medium">{block.title}</h2>
          <div className="space-y-6">
            <RichText data={block.description} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlockContent
