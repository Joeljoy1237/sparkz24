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
            <Slider events={allEvents} />
        </div>
    )
}
