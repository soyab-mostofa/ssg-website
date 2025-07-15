import type { AdminViewProps } from 'payload'
import { DefaultTemplate } from '@payloadcms/next/templates'
import React from 'react'
import Image from 'next/image'
import { RegisterForm } from './RegisterForm'
import './register-styles.css'

export function RegisterView(props: AdminViewProps) {
  const { initPageResult, params, searchParams } = props || {}

  // For unauthenticated registration page, render without DefaultTemplate
  if (!initPageResult) {
    return (
      <div className="payload-register-page">
        <div className="payload-register-container">
          <div className="payload-register-header">
            <div className="payload-register-logo">
              <Image
                className="payload-logo-image"
                src="/main-logo.png"
                alt="Shin Shin Group"
                width={48}
                height={48}
              />
            </div>
            <h1 className="payload-register-title">
              Create your account
            </h1>
            <p className="payload-register-subtitle">
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
        <div className="payload-register-page">
          <div className="payload-register-container">
            <div className="payload-register-header">
              <div className="payload-register-logo">
                <Image
                  className="payload-logo-image"
                  src="/main-logo.png"
                  alt="Shin Shin Group"
                  width={48}
                  height={48}
                />
              </div>
              <h1 className="payload-register-title">
                Create your account
              </h1>
              <p className="payload-register-subtitle">
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
