'use server'

import { getPayload } from '@/lib/payload'
import { redirect } from 'next/navigation'

export async function registerAction(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const confirmPassword = formData.get('confirmPassword') as string
  const agreeTerms = formData.get('agreeTerms') as string

  // Basic validation
  if (!email || !password || !confirmPassword) {
    return { error: 'All fields are required' }
  }

  if (password !== confirmPassword) {
    return { error: 'Passwords do not match' }
  }

  if (!agreeTerms) {
    return { error: 'You must agree to the terms and conditions' }
  }

  if (password.length < 8) {
    return { error: 'Password must be at least 8 characters long' }
  }

  try {
    const payload = await getPayload()

    // Check if user already exists
    const existingUsers = await payload.find({
      collection: 'users',
      where: {
        email: {
          equals: email,
        },
      },
    })

    if (existingUsers.docs.length > 0) {
      return { error: 'User with this email already exists' }
    }

    // Create new user
    const user = await payload.create({
      collection: 'users',
      data: {
        email,
        password,
        role: 'user', // Default role
      },
    })

    if (user) {
      redirect('/admin/login?message=Account created successfully. Please log in.')
    }
  } catch (error) {
    console.error('Registration error:', error)
    return { error: 'Failed to create account. Please try again.' }
  }
}
