'use client';

import Image from "next/image";
import Link from "next/link";
import styles from './Header.module.css';


export default function Header() {
  return (
    <header className={styles.header}>
  
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image
            src="/Logo.png"
            alt="Appscribe Logo"
            width={150}
            height={150}
          />
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/" aria-label="Home Page">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" aria-label="About Us">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" aria-label="Our Services">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" aria-label="Contact Us">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
