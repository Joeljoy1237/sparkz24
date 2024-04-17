import React, { Suspense } from 'react'
import styles from '@styles/scss/eventList.module.scss'
import Image from 'next/image'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

export default function EventList({ eventList }) {
  const router = useRouter()
  return (
    <div className={styles.container}>
      {eventList?.map((event) => (
        <Suspense key={event?._id}>
          <Image alt='event' onClick={()=>{
            router.push('/events/cse/'+event?._id)
            toast.info("Registration starts soon.",{
              position:"bottom-center",
              theme:"dark"
            })
          }} key={event?._id} src={event?.imgUrl ? event?.imgUrl : event?.posterImg} height={1000} width={1000} className={styles.poster} />
        </Suspense>
      ))}
    </div>
  )
}
