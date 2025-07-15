'use client'

import React, { useState } from 'react'
import { Button } from '@payloadcms/ui'
import { registerAction } from '../actions/register'

export function RegisterForm() {
  const [error, setError] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    setError('')

    const formData = new FormData(event.currentTarget)

    try {
      const result = await registerAction(formData)
      if (result?.error) {
        setError(result.error)
      }
    } catch (_err) {
      setError('An unexpected error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="payload-form">
      <form onSubmit={handleSubmit} className="payload-form">
        {error && (
          <div className="payload-error-message">
            {error}
          </div>
        )}

        <div className="payload-form-group">
          <label htmlFor="email" className="payload-form-label">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="payload-form-input"
            placeholder="Enter your email"
          />
        </div>

        <div className="payload-form-group">
          <label htmlFor="password" className="payload-form-label">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            className="payload-form-input"
            placeholder="Create a password"
          />
        </div>

        <div className="payload-form-group">
          <label htmlFor="confirmPassword" className="payload-form-label">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            required
            className="payload-form-input"
            placeholder="Confirm your password"
          />
        </div>

        <div className="payload-checkbox-group">
          <input
            id="agreeToTerms"
            name="agreeToTerms"
            type="checkbox"
            required
            className="payload-checkbox"
          />
          <label htmlFor="agreeToTerms" className="payload-checkbox-label">
            I agree to the{' '}
            <a href="/terms">
              Terms and Conditions
            </a>{' '}
            and{' '}
            <a href="/privacy">
              Privacy Policy
            </a>
          </label>
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="payload-submit-button"
        >
          {isLoading ? (
            <>
              <div className="payload-spinner" />
              Creating account...
            </>
          ) : (
            'Create account'
          )}
        </Button>


      </form>
    </div>
  )
}
