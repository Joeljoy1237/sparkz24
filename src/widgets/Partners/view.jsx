"use client"

import React from 'react'
import styles from '@styles/scss/partners.module.scss'
import Image from 'next/image'

export default function Partners() {
  const partnerLogo = [
    "/images/iedc.svg",
    "/images/ccet.svg"
  ]
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.topRow}>
          <span className={styles.aboutTitle}>Partners</span>
        </div>
          {/* <marquee scrollamount="20" behavior="" direction="left"> */}
            <div className={styles.scrollRow}>
              {partnerLogo?.map((logo) => (
                <Image className={styles.logo} src={logo} height={100} width={100} />
              ))}
            </div>
          {/* </marquee> */}
      </div>
    </div>
  )
}
