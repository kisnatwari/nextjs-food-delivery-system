import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CartIcon = () => {
    return (
        <Link href="/cart" className='p-4 cursor-pointer hover:bg-red-600 flex items-center gap-2'>
            <div className='relative w-5 h-5'>
                <Image src={"/cart.png"} alt='' fill />
            </div>
            <span>Cart (3)</span>
        </Link>
    )
}

export default CartIcon