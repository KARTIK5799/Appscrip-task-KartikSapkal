'use client';
import Image from 'next/image';
import styles from './OfferBanner.module.css';

export default function OfferBanner() {
    return (
        <div className={styles.mainOfferBanner}>
            <div className={styles.offerText}>
              <Image src="/offerbannericon.svg"
                alt="offer-icon"
                width={20}
                height={20}
              />
                <p>Lorem ipsum dolor</p>
            </div>
            <div className={styles.offerText}>
            <Image src="/offerbannericon.svg"
                alt="offer-icon"
                width={20}
                height={20}
              />
                <p>Lorem ipsum dolor</p>
            </div>
            <div className={styles.offerText}>
            <Image src="/offerbannericon.svg"
                alt="offer-icon"
                width={20}
                height={20}
              />
                <p>Lorem ipsum dolor</p>
            </div>
        </div>
    )
}
