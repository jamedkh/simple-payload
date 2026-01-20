'use client'

import { Page } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { Mail, SendHorizonal } from 'lucide-react'
import { useState } from 'react'

type FormState = {
  loading: boolean
  error: string | null
  success: boolean
}
export default function Newsletter({
  block,
}: {
  block: Extract<NonNullable<Page['layout']>[number], { blockType: 'newsletter' }>
}) {
  const [formData, setFormData] = useState({})
  const [formState, setFormState] = useState<FormState>({
    loading: false,
    error: null,
    success: false,
  })
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted')
    setFormState({
      loading: true,
      error: null,
      success: false,
    })
    if (!block?.newsletterForm || typeof block?.newsletterForm !== 'object') return
    const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData.entries())
    console.log(data)
    try {
      const response = await fetch('/api/form-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          form: block.newsletterForm.id,
          submissionData: Object.entries(data)?.map(([field, value]) => {
            return {
              field,
              value: value as string,
            }
          }),
        }),
      })

      // if response is not ok throw error
      if (!response.ok) {
        throw new Error('Failed to submit form')
      }
      setFormState({
        loading: false,
        error: null,
        success: true,
      })
      // reset form
      ;(e.target as HTMLFormElement).reset()

      // reset form after 5 seconds
      setTimeout(() => {
        setFormState({
          loading: false,
          error: null,
          success: false,
        })
      }, 2000)
    } catch (error) {
      setFormState({
        loading: false,
        error: error instanceof Error ? error.message : 'An unknown error occurred',
        success: false,
      })
    }
  }
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          {typeof block?.newsletterForm === 'object' &&
            block?.newsletterForm?.title === 'Newsletter' && (
              <>
                <h2 className="text-balance text-4xl font-semibold lg:text-5xl">{block.heading}</h2>
                <div className="mt-4">
                  {block?.description && <RichText data={block?.description} />}
                </div>

                <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-sm lg:mt-12">
                  <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-full border pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
                    {block?.newsletterForm?.fields?.map((field: any) => (
                      <div key={field.name}>
                        <Mail className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />
                        <input
                          name={field.name}
                          placeholder={field.label}
                          className="h-14 w-full bg-transparent pl-12 focus:outline-none"
                          type={field.type}
                          required={field.required}
                        />
                      </div>
                    ))}

                    {/* display error or success message */}
                    {formState.error && (
                      <p className="mt-2 text-sm text-red-500">{formState.error}</p>
                    )}
                    {formState.success ? (
                      <div className="mt-2 text-sm text-green-500">
                        {block?.newsletterForm.confirmationMessage && (
                          <RichText data={block?.newsletterForm.confirmationMessage!} />
                        )}
                      </div>
                    ) : (
                      <div className="md:pr-1.5 lg:pr-0">
                        <button
                          type="submit"
                          aria-label="submit"
                          className="rounded-full border px-6 py-2.5 text-center text-sm font-medium transition-colors hover:bg-muted bg-black"
                        >
                          <span className="hidden md:block">
                            {block?.newsletterForm?.submitButtonLabel || 'Get Started'}
                          </span>
                          <SendHorizonal
                            className="relative mx-auto size-5 md:hidden"
                            strokeWidth={2}
                          />
                        </button>
                      </div>
                    )}
                  </div>
                </form>
              </>
            )}
        </div>
      </div>
    </section>
  )
}
