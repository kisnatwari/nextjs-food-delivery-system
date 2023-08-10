import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:p-20 xl:p-40 text-red-500 bg-white flex items-center justify-between uppercase">
      <Link href="/" className='font-bold'>
        MASSIMO
      </Link>
        <p>
          &copy; all rights reserved
        </p>
    </div>
  )
}

export default Footer