"use client"

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react'


const UserLinks = () => {
    const { status } = useSession();
    return (
        <div>
            {
                status === 'authenticated' ? (
                    <div className='flex gap-3'>
                        <Link href={"/orders"}>
                            Orders
                        </Link>
                        <span className='cursor-pointer' onClick={() => signOut()}>
                            Logout
                        </span>
                    </div>
                ) : (
                    <div>
                        <Link href={"/login"}>
                            Login
                        </Link>
                    </div>
                )
            }
        </div>
    )
}

export default UserLinks