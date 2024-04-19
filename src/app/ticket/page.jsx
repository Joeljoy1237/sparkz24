import React from 'react'
import styles from '@styles/scss/ticketPage.module.scss'
import Ticket from '@/common/components/Ticket'

export default function page() {
  return (
    <div className={styles.container}>
        <Ticket/>
    </div>
  )
}
