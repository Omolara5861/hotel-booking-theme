import Image from 'next/image'
import { Inter,Quicksand } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import DestinationSection from '@/components/DestinationSection'
import HotelsSection from '@/components/HotelsSection'
import ExploreFranceSection from '@/components/ExploreFranceSection'

const quicksand = Quicksand({ subsets: ['latin'],weight:['400','500','600','700'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-100vh mx-auto max-w-[1400px] ${quicksand.className}`}
    >
     <Sidebar />
     <section className=" w-full flex-1 px-6 pb-6 ">
     <Navbar />
     <Hero/>
     <DestinationSection/>
     <HotelsSection/>
     <ExploreFranceSection />
     </section>
    </main>
  )
}
