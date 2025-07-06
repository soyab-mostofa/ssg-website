import type { AdminViewProps } from 'payload'
import { DefaultTemplate } from '@payloadcms/next/templates'
import React from 'react'
import Image from 'next/image'
import { RegisterForm } from './RegisterForm'

export function RegisterView(props: AdminViewProps) {
  const { initPageResult, params, searchParams } = props || {}

  // For unauthenticated registration page, render without DefaultTemplate
  if (!initPageResult) {
    return (
      <div className="bg-gray-50 flex min-h-screen flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <div className="flex justify-center">
              <Image
                className="h-12 w-auto"
                src="/main-logo.png"
                alt="Shin Shin Group"
                width={48}
                height={48}
              />
            </div>
            <h2 className="text-gray-900 mt-6 text-center text-3xl font-extrabold">
              Create your account
            </h2>
            <p className="text-gray-600 mt-2 text-center text-sm">
              Join the Shin Shin Group admin panel
            </p>
          </div>
          <RegisterForm />
        </div>
      </div>
    )
  }

  // For authenticated users, use DefaultTemplate
  return (
    <DefaultTemplate
      i18n={initPageResult.req.i18n}
      locale={initPageResult.locale}
      params={params}
      payload={initPageResult.req.payload}
      permissions={initPageResult.permissions}
      searchParams={searchParams}
      user={initPageResult.req.user || undefined}
      visibleEntities={initPageResult.visibleEntities}
    >
      <div className="gutter">
        <div className="bg-gray-50 flex min-h-screen flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div>
              <div className="flex justify-center">
                <Image
                  className="h-12 w-auto"
                  src="/main-logo.png"
                  alt="Shin Shin Group"
                  width={48}
                  height={48}
                />
              </div>
              <h2 className="text-gray-900 mt-6 text-center text-3xl font-extrabold">
                Create your account
              </h2>
              <p className="text-gray-600 mt-2 text-center text-sm">
                Join the Shin Shin Group admin panel
              </p>
            </div>
            <RegisterForm />
          </div>
        </div>
      </div>
    </DefaultTemplate>
  )
}
