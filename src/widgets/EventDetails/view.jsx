"use client"

import React from 'react'
import styles from '@styles/scss/eventDetails.module.scss'
import { useParams } from 'next/navigation'

export default function EventDetails() {
    const pathname = useParams()
    console.log(pathname?.slug)
    return (
        <div className={styles.container}>view</div>
    )
}
