"use client"

import React from 'react'
import styles from '@styles/scss/events.module.scss'
import { depLogo } from '@/common/constants/constants'
import { useRouter } from 'next/navigation'

export default function Events() {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.row}>
                    <div className={styles.title}>
                        Select Department
                    </div>
                </div>
                <div className={styles.imgRow}>
                    {depLogo?.map((logo) => (
                        <div onClick={()=>{
                            router.push(logo?.url)
                        }} className={styles.logoBox} key={logo?.title}>
                            <span className={styles.logoname}>{logo?.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
