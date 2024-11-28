import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <>
    <div>Product Page</div>
    <Link href="/products/1">Product 1 </Link>
    </>
  )
}

export default page