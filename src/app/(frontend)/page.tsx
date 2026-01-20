import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import { Page } from '@/payload-types'
import './styles.css'
import NotFound from './404'
import HomeHero from './components/home-hero'
import BlockContent from './components/home-about'
import BlockNewsletter from './components/newsletter'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  // page query for home page
  const {
    docs: [page],
  } = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'home',
      },
    },
  })

  if (!page) {
    return <NotFound />
  }

  const renderBlocks = (block: NonNullable<Page['layout']>[number]) => {
    switch (block.blockType) {
      case 'homeHero':
        return <HomeHero key={block.id} block={block} />
      case 'blockContent':
        return <BlockContent key={block.id} block={block} />
      case 'newsletter':
        return <BlockNewsletter key={block.id} block={block} />

      default:
        return null
    }
  }

  return <main className="main-holder">{page.layout?.map((block) => renderBlocks(block))}</main>
}
