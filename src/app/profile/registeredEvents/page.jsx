import Credits from '@/widgets/Credits'
import Footer from '@/widgets/Footer'
import RegisteredEvents from '@/widgets/RegisteredEvents'
import React from 'react'
import styles from '@styles/scss/registeredEvents.module.scss'

export default function page() {
  return (
    <div className={styles.parent}>
        <RegisteredEvents/>
        <Footer/>
        <Credits/>
    </div>
  )
}
