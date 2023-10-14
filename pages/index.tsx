import Image from 'next/image'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex ${inter.className}`}
    >
     <Sidebar />
     <section className="flex-1 h-screen px-7">
     <Navbar />
     <Hero/>
     </section>
    </main>
  )
}
