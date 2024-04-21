/**
 * © NCIPETC-24 2024. All rights reserved.
 *
 * This code is the property of NCIPETC-24 and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Abhishek Santhosh
 */

import React from 'react'
import styles from '@styles/scss/contact.module.scss'
import Location from '@icons/Location'
import Mail from '@icons/MailIcon'
import Mobile from '@icons/Mobile'
import Link from 'next/link'

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <div className={styles.iconBox}>
            <Location />
          </div>
          <div className={styles.addTitle}>
            <span className={styles.title}>Office address</span>
          </div>
          <div className={styles.detailsBox}>
            <p className={styles.details}>Carmel College of Engineering and Techonology</p>
            <p className={styles.details}>Punnapra | Alappuzha-688004, Kerala</p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.iconBox}>
            <Mail />
          </div>
          <div className={styles.addTitle}>
            <span className={styles.title}>Mail</span>
          </div>
          <div className={styles.detailsBox}>
            <Link href="mailto:sparkz@carmelcet.in" className={styles.mail}>sparkz@carmelcet.in</Link>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.iconBox}>
            <Mobile />
          </div>
          <div className={styles.addTitle}>
            <span className={styles.title}>Phone numbers</span>
          </div>
          <div className={styles.detailsBox}>
            <div className={styles.contact}>
              <Link href="tel:+918589059517" className={styles.mail}>+91 8589059517</Link>
            </div>
            <div className={styles.contact}>
              <Link href="tel:+919995267896," className={styles.mail}>+91 9995267896,</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}