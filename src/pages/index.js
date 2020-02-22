import React from 'react'
import Link from 'next/link'

export default function index() {
  return (
    <div>
      <h3>Hello Next on Rails</h3>
      <Link href="/auth/signin">Sign In</Link>
    </div>
  )
}
