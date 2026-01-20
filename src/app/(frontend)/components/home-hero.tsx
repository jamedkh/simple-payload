import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Page } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'

export default function HomeHero({
  block,
}: {
  block: Extract<NonNullable<Page['layout']>[number], { blockType: 'homeHero' }>
}) {
  return (
    <>
      <div className="overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
        >
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section>
          <div className="relative pt-24 md:pt-36">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
            />

            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <div className="mx-auto mt-8 max-w-4xl text-balance">
                  <h1 className="text-5xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[5.25rem]">
                    {block.heading}
                  </h1>
                </div>

                <div className="mt-14">
                  {block.description && <RichText data={block.description} />}
                </div>

                <div className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                  {block.ctaButtons?.[0] && (
                    <a
                      href={block.ctaButtons[0].link}
                      className="rounded-full px-5 py-3 text-base bg-white text-black"
                    >
                      {block.ctaButtons[0].label}
                    </a>
                  )}
                  {block.ctaButtons?.[1] && (
                    <a href={block.ctaButtons[1].link} className="h-10.5 rounded-xl px-5">
                      {block.ctaButtons[1].label}
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="mask-b-from-55% relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
              <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                {typeof block?.image === 'object' && block.image?.url && (
                  <Image
                    className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
                    src={block.image.url}
                    alt={block.image.alt}
                    width="2700"
                    height="1440"
                  />
                )}

                {typeof block?.image === 'object' && block.image?.url && (
                  <Image
                    className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                    src={block.image.url}
                    alt={block.image.alt}
                    width="2700"
                    height="1440"
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
