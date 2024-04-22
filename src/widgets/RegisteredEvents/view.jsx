"use client"

import React, { useEffect, useState } from 'react'
import styles from '@styles/scss/registeredEvents.module.scss'
import { getProfile } from '@/services/profile'
import Loading from '@/common/components/Loading';

export default function RegisteredEvents() {
    const [regEvents, setRegEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getProfile(setRegEvents, setLoading);
    }, [])
    return (
        <>
            {loading || regEvents?.length === 0 ?
                <Loading />
                :
                <div className={styles.container}>
                    <div className={styles.wrap}>
                        <div className={styles.toprow}>
                            <span className={styles.aboutTitle}>Registered Events</span>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.box}>
                                {regEvents?.map((event) => (
                                    <div key={event?.title} className={styles.wrapper}>
                                        <div className={styles.boxRow}>
                                            <div className={styles.itemBox}>
                                                <span className={styles.item}>{event?.event?.title}</span>
                                            </div>
                                            <div className={styles.itemBox}>
                                                <span className={styles.item}>Conducting by {event?.event?.department}</span>
                                            </div>
                                            {event?.event?.type &&
                                                <div className={styles.itemBox}>
                                                    <span className={styles.item}>Type: {event?.event?.type}</span>
                                                </div>
                                            }
                                            {/* {event?.team &&
                                                <div className={styles.itemBox}>
                                                    <button className={styles.button}>View team mates</button>
                                                </div>
                                            } */}
                                        </div>
                                        <div className={styles.hr}></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
