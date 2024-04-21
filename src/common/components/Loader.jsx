"use client"
import React from 'react'
import styles from '@styles/scss/customLoader.module.scss'
import Image from 'next/image'
import Loading from './Loading'
export default function Loader() {
    return (
        <div className={styles.container}>
            {/* <Image alt='loader' src={"/images/loading.svg"} className={styles.loading} height={1000} width={1000} /> */}
            {/* <Loading/> */}
        </div>
    )
}
