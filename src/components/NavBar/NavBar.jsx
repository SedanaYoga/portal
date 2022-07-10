import styles from './NavBar.module.scss'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {
  const [isNavExpand, setIsNavExpand] = useState(false)
  const expandHamburger = () => {
    setIsNavExpand((prev) => !prev)
  }
  return (
    <nav className={styles.nav}>
      <div className={styles.navLeft}>
        <h1>
          Sedana Yoga <span>| FRONTEND DEVELOPER</span>
        </h1>
      </div>
      <div onClick={expandHamburger} className={styles.navHamburger}>
        <Image src='/images/hamburger_icon.svg' alt='hamburger' layout='fill' />
      </div>
      <ul className={isNavExpand ? styles.expand : ''}>
        <li style={{ '--index': 0 }}>
          <Link href='/'>Home</Link>
        </li>
        <li style={{ '--index': 1 }}>
          <Link href='/works'>Works</Link>
        </li>
        <li style={{ '--index': 2 }}>
          <Link href='/resume'>Resume</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
