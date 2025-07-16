'use server'

import { getPayload } from '@/lib/payload'

type RegisterResult = 
  | { success: false; error: string }
  | { success: true; message: string }

export async function registerAction(formData: FormData): Promise<RegisterResult> {
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const confirmPassword = formData.get('confirmPassword') as string
  const agreeToTerms = formData.get('agreeToTerms') as string

  // Basic validation
  if (!email || !password || !confirmPassword) {
    return { success: false, error: 'All fields are required' }
  }

  if (password !== confirmPassword) {
    return { success: false, error: 'Passwords do not match' }
  }

  if (!agreeToTerms) {
    return { success: false, error: 'You must agree to the terms and conditions' }
  }

  if (password.length < 8) {
    return { success: false, error: 'Password must be at least 8 characters long' }
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
      return { success: false, error: 'User with this email already exists' }
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
      return { success: true, message: 'Account created successfully. Please log in.' }
    }
  } catch (error) {
    console.error('Registration error:', error)
    return { success: false, error: 'Failed to create account. Please try again.' }
  }

  return { success: false, error: 'Failed to create account. Please try again.' }
}
