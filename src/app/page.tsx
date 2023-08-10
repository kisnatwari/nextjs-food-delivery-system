import Featured from '@/components/Featured'
import Offer from '@/components/Offer'
import Slider from '@/components/Slider'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col flex-grow items-center justify-between">
      <Slider />
      <Featured />
      <Offer />
    </main>
  )
}
