"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const data = [
  {
    id: 1,
    title: 'Delicious Bites, Delivered Fresh to You',
    image: '/slide1.png'
  },
  {
    id: 2,
    title: 'Crispy Goodness, Right at Your Doorstep',
    image: '/slide2.png'
  },
  {
    id: 3,
    title: 'Savor the Flavor with Always Hot Delivery',
    image: '/slide3.jpg'
  }
];


const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
/*   useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(
        (currentSlide) => (currentSlide + 1 === data.length - 1 ? 0 : currentSlide + 1)
        )}, 2000);
    return () => clearInterval(interval);
  }, []); */
  return (
    <div className='flex flex-col lg:flex-row h-[calc(100vh-6rem)] md:h-[calc(100vh - 9rem)]'>
      {/* Text Container */}
      <div className='bg-white flex justify-center items-center flex-col gap-2 p-9 lg:w-1/2 h-1/2 lg:h-full'>
        <h1 className='uppercase text-red-500 text-5xl text-center font-extrabold mb-5'>
          {data[currentSlide].title}
        </h1>
        <button className='bg-red-500 text-white px-4 py-3 font-bold'>Order Now</button>
      </div>
      {/* Image Container */}
      <div className='lg:w-1/2 h-1/2 lg:h-full relative'>
        <Image src={data[currentSlide].image} fill alt='' className='object-cover' />
      </div>
    </div>
  )
}

export default Slider