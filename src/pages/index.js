import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Navbar />
      <h2>Homepage</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, iste!</p>
      <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates illo perferendis, ducimus ex voluptatibus doloremque obcaecati nobis esse debitis dignissimos praesentium exercitationem ipsam mollitia quasi?</h5>
      <Footer />
    </div>
  )
}
