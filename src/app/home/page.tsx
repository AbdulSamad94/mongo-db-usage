import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
        <Link href="home/first"><li>Visit first</li></Link>
        <Link href="home/second"><li>Visit first</li></Link>
    </div>
  )
}

export default page