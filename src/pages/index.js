import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h2 className={styles.title}>Homepage</h2>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, iste!</p>
      <h5 className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates illo perferendis, ducimus ex voluptatibus doloremque obcaecati nobis esse debitis dignissimos praesentium exercitationem ipsam mollitia quasi?</h5>
      <Link href="/" className={styles.btn}>
        See more
      </Link>
    </div>
  )
}
