'use client'
import React from 'react'
import Link from 'next/link'

export default function AfterLoginComponent() {
  return (
    <div className="mt-6 text-center">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="border-gray-300 w-full border-t" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white text-gray-500 px-2">or</span>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-gray-600 text-sm">
          Don&apos;t have an account?{' '}
          <Link
            href="/admin/register"
            className="text-blue-600 hover:text-blue-500 font-medium transition-colors duration-200"
          >
            Create your account here
          </Link>
        </p>
      </div>
    </div>
  )
}
