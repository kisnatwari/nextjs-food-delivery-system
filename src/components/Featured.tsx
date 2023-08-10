import { featuredProducts } from '@/data'
import Image from 'next/image'
import React from 'react'

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-red-500">
      {/* wrapper */}
      <div className="w-max flex">
        {/* Single Item */}
        {
          featuredProducts.map(item => (
            <div className='w-screen h-[60vh] flex flex-col items-center justify-around gap-4 p-4 bg-white hover:bg-fuchsia-100 transition-all duration-300 md:w-[50vw] lg:w-[33.333vw] xl:w-[25vw] 2xl:w-[20vw]' key={item.id}>
              {/* Image container */}
              {item.img &&
                <div className="relative flex-1 w-full hover:scale-105 hover:rotate-6 transition-all duration-300">
                  <Image
                    src={item.img}
                    alt='featured image 1'
                    className='object-contain' fill
                  />
                </div>
              }
              {/* Text Container */}
              <div className=" flex flex-1  flex-col gap-4 items-center text-center">
                <h1 className="text-xl xl:text-2xl 2xl:text-3xl font-bold uppercase">
                  {item.title}
                </h1>
                <p className="text-sm px-4">
                  {item.desc}
                </p>
                <span className="text-xl font-bold uppercasw">
                  ${item.price}
                </span>
                <button className="bg-red-500 text-white p-2 px-4 rounded-md w-fit">
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Featured