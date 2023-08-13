import { menu } from '@/data';
import { MenuType } from '@/types/types';
import Link from 'next/link'
import React from 'react'


const getData = async () => {
    const res = await fetch('http://localhost:3000/api/categories', {
        cache: "no-store"
    });
    if(!res.ok){
        throw new Error("Failed");
    }
    return res.json();
}


const MenuPage = async () => {
    const menus:MenuType[] = await getData();
    return (
        <div className='p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center bg-white'>
            {
                menus.map((category) => (
                    category.color && <Link href={`/menu/${category.slug}`}
                        key={category.id}
                        className="w-full h-1/2 bg-cover border-2 p-8 md:h-[90%] xl:h-2/3"
                        style={{ backgroundImage: `url(${category.img})` }}>
                        <div className={`text-${category.color} w-1/2`}>
                            <h1 className="text-4xl font-bold">{category.title}</h1>
                            <p className="text-sm my-8">{category.desc}</p>
                            <button className={`hidden lg:block bg-${category.color} text-${category.color === "black" ? "white" : "red-500"} py-2 px-4 rounded-md`}>Explore</button>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default MenuPage