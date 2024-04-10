import React, { Suspense } from 'react'
import styles from '@styles/scss/eventList.module.scss'
import Image from 'next/image'

export default function EventList({ eventList }) {
  return (
    <div className={styles.container}>
      {eventList?.map((event) => (
        <Suspense>
          <Image key={event?._id} src={event?.imgUrl ? event?.imgUrl : event?.posterImg} height={1000} width={1000} className={styles.poster} />
        </Suspense>
      ))}
    </div>
  )
}
