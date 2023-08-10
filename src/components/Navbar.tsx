import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import CartIcon from './CartIcon'
import Image from 'next/image'

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 text-red-500 bg-white p-4 flex justify-between items-center border-bottom border-b border-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* Left links */}
      <div className='hidden md:flex gap-4 flex-1'>
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>

      <div>
        <Link href="/" className='font-bold'>Massimo</Link>
      </div>
      {/* Right links */}
      <div className='hidden md:flex items-center justify-end gap-4 flex-1'>

        <div className='flex items-center bg-orange-300 px-1 rounded md:absolute top-3 right-2 lg:static'>
          <Image src={'/phone.png'} width={20} height={20} alt='phone' />
          <span className='ml-2'>+1 555 123456</span>
        </div>

        <CartIcon />
        {
          user ?
            (<Link href="/cart">Orders</Link>)
            :
            (<Link href="/login">Login</Link>)
        }
      </div>

      <div className='md:hidden'>
        <Menu />
      </div>
    </div>
  )
}

export default Navbar