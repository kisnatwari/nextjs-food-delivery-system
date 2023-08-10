"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import CartIcon from './CartIcon'

const Menu = () => {
  const links = [
    { id: 1, title: "Homepage", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "Working Hours", url: "/contact" },
  ]
  const [open, setOpen] = useState<boolean>(false);
  const user: boolean = false;

  return (
    <div>
      <Image src={open ? "/close.png" : "/open.png"}
        onClick={() => setOpen(!open)}
        alt='Hamburger image' width={20} height={20}
      />
      { open &&
        <div className="bg-red-500 text-white absolute z-10 left-0 top-24 h-[calc(100vh-6rem)] w-full flex justify-center flex-col items-center">

          {
            links.map((link) => (
              <Link href={link.url} key={link.id} onClick={() => setOpen(false)}>
                <div className="p-4 cursor-pointer hover:bg-red-600">{link.title}</div>
              </Link>
            ))}

          {
            user ?
              (<Link href="/cart" onClick={() => setOpen(false)}>
                <div className="p-4 cursor-pointer hover:bg-red-600">Orders</div>
              </Link>)
              :
              (<Link href="/login" onClick={() => setOpen(false)}>
                <div className="p-4 cursor-pointer hover:bg-red-600">Login</div>
              </Link>)
          }

          <CartIcon />

        </div>
      }
    </div>
  )
}

export default Menu