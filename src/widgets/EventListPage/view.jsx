"use client"

import React, { useEffect, useState } from 'react'
import styles from '@styles/scss/eventListPage.module.scss'
import { useRouter } from 'next/navigation';
import { useParams, usePathname } from 'next/navigation';
import { getDepartmentEvents } from '@/services/events/Event';
import EventList from '@/common/components/EventList';
import Loading from '@/common/components/Loading';

export default function EventListPage() {
  const params = useParams();
  const router = useRouter();
  const [eventList, setEventList] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getDepartmentEvents(params?.slug, setEventList,setLoading);
    if (params?.slug.toLocaleLowerCase() === "cse") {
      setTitle("Computer Science & Engineering")
    } else if (params?.slug.toLocaleLowerCase() === "eee") {
      setTitle("Electrical & Electronics Engineering")
    } else if (params?.slug.toLocaleLowerCase() === "mech") {
      setTitle("Mechanical Engineering");
    } else if (params?.slug.toLocaleLowerCase() === "civil") {
      setTitle("Civil Engineering")
    } else if (params?.slug.toLocaleLowerCase() === "bsc") {
      setTitle("Basic Science & Humanities")
    } else {
      router.push('/not-found')
    }
  }, [])

  return (
    <>
      {loading || eventList?.length === 0 ?
        <Loading />
        :
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.row}>
              <span className={styles.title}>{title}</span>
            </div>
            <EventList eventList={eventList} />
          </div>
        </div>
      }
    </>
  )
}
