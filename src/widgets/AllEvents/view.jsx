"use client"

import React, { useEffect, useState } from 'react'
import styles from '@styles/scss/eventPage.module.scss'
import EventList from '@/common/components/EventList'
import { getAllEvents } from '@/services/events/Event';

export default function AllEvents() {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        getAllEvents(setEvents);
    }, [])
    return (
        <div className={styles.container}>
            <div className={styles.titleBox}>
                <span className={styles.title}>All Events</span>
            </div>
            <EventList eventList={events} />
        </div>
    )
}
