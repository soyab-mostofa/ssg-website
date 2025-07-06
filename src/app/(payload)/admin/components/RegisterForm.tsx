'use client'
import React, { useState } from 'react'
import Link from 'next/link'
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
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      {error && (
        <div className="bg-red-50 rounded-md p-4">
          <div className="text-red-700 text-sm">{error}</div>
        </div>
      )}

      <div className="space-y-4 rounded-md shadow-sm">
        <div>
          <label htmlFor="email-address" className="text-gray-700 mb-1 block text-sm font-medium">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="border-gray-300 placeholder-gray-500 text-gray-900 focus:ring-blue-500 focus:border-blue-500 relative block w-full appearance-none rounded-md border px-3 py-2 focus:z-10 focus:outline-none sm:text-sm"
            placeholder="Enter your email address"
          />
        </div>
        <div>
          <label htmlFor="password" className="text-gray-700 mb-1 block text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            minLength={8}
            className="border-gray-300 placeholder-gray-500 text-gray-900 focus:ring-blue-500 focus:border-blue-500 relative block w-full appearance-none rounded-md border px-3 py-2 focus:z-10 focus:outline-none sm:text-sm"
            placeholder="Enter your password (min. 8 characters)"
          />
        </div>
        <div>
          <label
            htmlFor="confirm-password"
            className="text-gray-700 mb-1 block text-sm font-medium"
          >
            Confirm Password
          </label>
          <input
            id="confirm-password"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            required
            minLength={8}
            className="border-gray-300 placeholder-gray-500 text-gray-900 focus:ring-blue-500 focus:border-blue-500 relative block w-full appearance-none rounded-md border px-3 py-2 focus:z-10 focus:outline-none sm:text-sm"
            placeholder="Confirm your password"
          />
        </div>
      </div>

      <div className="flex items-center">
        <input
          id="agree-terms"
          name="agreeTerms"
          type="checkbox"
          className="text-blue-600 focus:ring-blue-500 border-gray-300 h-4 w-4 rounded"
          required
        />
        <label htmlFor="agree-terms" className="text-gray-900 ml-2 block text-sm">
          I agree to the{' '}
          <Link href="/terms" className="text-blue-600 hover:text-blue-500" target="_blank">
            terms and conditions
          </Link>
        </label>
      </div>

      <div>
        <button
          type="submit"
          disabled={isLoading}
          className="border-transparent text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 group relative flex w-full justify-center rounded-md border px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isLoading ? 'Creating Account...' : 'Create Account'}
        </button>
      </div>

      <div className="text-center">
        <p className="text-gray-600 text-sm">
          Already have an account?{' '}
          <Link
            href="/admin/login"
            className="text-blue-600 hover:text-blue-500 font-medium transition-colors duration-200"
          >
            Sign in here
          </Link>
        </p>
      </div>
    </form>
  )
}
