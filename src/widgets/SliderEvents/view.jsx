"use client"

import { getAllEvents } from '@/services/events/Event';
import React, { useEffect, useState } from 'react'
import Slider from '@widgets/Slider';
import styles from '@styles/scss/sliderEvents.module.scss'

export default function SliderEvents() {
    const [allEvents, setAllEvents] = useState([]);
    useEffect(() => {
        getAllEvents(setAllEvents)
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.titleBox}>
                    <span className={styles.featured}>Featured Events</span>
                </div>
                <Slider events={allEvents} />
            </div>
            {/* <div className={styles.row}>
                <div className={styles.titleBox}>
                    <span className={styles.featured}>All Events</span>
                </div>
                <Slider events={allEvents} />
            </div> */}
        </div>
    )
}
