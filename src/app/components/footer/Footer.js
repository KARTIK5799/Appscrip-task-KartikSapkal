'use client';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Appscribe. All rights reserved.</p>
      <p>
        <a href="/privacy" aria-label="Privacy Policy">Privacy Policy</a> | 
        <a href="/terms" aria-label="Terms of Service">Terms of Service</a>
      </p>
    </footer>
  );
}
