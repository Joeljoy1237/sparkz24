import React from 'react'
import { GridLoader } from 'react-spinners'
import styles from '@styles/scss/customLoader.module.scss'

export default function Loading() {
    return (
        <div className={styles.container}>
            <GridLoader size={20} color='#01f77e' className={styles.loader} />
        </div>
    )
}
