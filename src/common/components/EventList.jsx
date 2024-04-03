import React from 'react'
import styles from '@styles/scss/eventList.module.scss'
import Image from 'next/image'
export default function EventList({ eventList }) {
  return (
    <div className={styles.container}>
      {eventList?.map((event) => (
        <Image key={event?._id} src={event?.imgUrl} height={1000} width={1000} className={styles.poster}/>
      ))}
    </div>
  )
}
