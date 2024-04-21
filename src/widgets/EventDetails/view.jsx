"use client"

import React, { useEffect, useState } from 'react'
import styles from '@styles/scss/eventDetails.module.scss'
import { useParams, useRouter } from 'next/navigation'
import { getAllEvents, getEventDetails, getEventDetailsByToken } from '@/services/events/Event'
import Image from 'next/image'

export default function EventDetails() {
    const params = useParams()
    const router = useRouter();
    //consolepathname?.slug)
    const [event, setEvent] = useState({});
        // console.log(token)
    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            console.log(localStorage.getItem('accessToken'))
            console.log("called")
            getEventDetailsByToken(params?.id, setEvent);
        } else {
            getEventDetails(params?.id, setEvent);
        }
    }, [])

    const handleClick = (e)=>{
        e.preventDefault();
        if(params?.slug === "bsc"){
            router?.push(`/events/${params?.slug}/${event?._id}/${event?.title}`)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <div className={styles.row}>
                    <div className={styles.box}>
                        <div className={styles.boxrow}>
                            <div className={styles.left}>
                                <Image src={event?.posterImg} height={1000} width={1000} className={styles.poster} />
                                <button onClick={(e)=>{
                                    handleClick(e)
                                }} className={styles.register}>{event?.isRegistered ? "Already Registered" : "Registrations starts soon !!!"}</button>
                            </div>
                            <div className={styles.hr}></div>
                            <div className={styles.right}>
                                <div className={styles.rightRow}>
                                    <span className={styles.eventName}>{event?.title}</span>
                                </div>
                                <div className={styles.rightRow}>
                                    <div className={event?.priceCount > 1 ? styles.prizeBoxspace : styles.prizeBox}>
                                        {event?.priceCount >= 1 &&
                                            <div className={styles.prize}>
                                                <Image width={1000} height={1000} className={styles.prizeicon} src={"/images/first.png"} />
                                                <span className={styles.prizeAmt}>{event?.firstPrize}</span>                                        </div>
                                        }
                                        {event?.priceCount >= 2 &&
                                            <div className={styles.prize}>
                                                <Image width={1000} height={1000} className={styles.prizeicon} src={"/images/second.png"} />
                                                <span className={styles.prizeAmt}>{event?.firstPrize}</span>                                        </div>
                                        }
                                        {event?.priceCount >= 3 &&
                                            <div className={styles.prize}>
                                                <Image width={1000} height={1000} className={styles.prizeicon} src={"/images/third.png"} />
                                                <span className={styles.prizeAmt}>{event?.firstPrize}</span>                                        </div>
                                        }
                                    </div>
                                </div>
                                <div className={styles.rightRow}>
                                    <div className={styles.typeBox}>
                                        <span className={styles.data}>{event?.type}</span>
                                    </div>
                                    {event?.venue &&
                                        <div className={styles.typeBox}>
                                            <span className={styles.data}>{event?.venue}</span>
                                        </div>
                                    }
                                </div>
                                <div className={styles.rightRow}>
                                    {event?.date &&
                                        <div className={styles.typeBox}>
                                            <span className={styles.data}>{event?.date} {event?.time &&
                                                <>
                                                    | {event?.time}
                                                </>
                                            }</span>
                                        </div>
                                    }
                                </div>
                                <div className={styles.rightRow}>
                                    <span className={styles.data}>{event?.desc?.slice(0, 250)}......</span>
                                </div>
                                {event?.rules &&
                                    <div className={styles.rightRow}>
                                        <div className={styles.ruleWrap}>
                                            <span className={styles.data}>Rules and Regulations:</span>
                                            <div className={styles.ruleBox}>
                                                {event?.rules?.map((rule) => (
                                                    <span className={styles.data}>🚀{" "}{rule}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                }
                                <div className={styles.rightRow}></div>
                            </div>
                        </div>
                        <div className={styles.hrrow}></div>
                        <div className={styles.boxrow}>
                            <div className={styles.innerRow}>
                                {/* <div className={styles.contactRow}>
                                    <span className={styles.contactTitle}>Contact</span>
                                </div> */}
                                <div className={styles.contactRow}>
                                    {event?.cordinator?.map((item) => (
                                        <div className={styles.contactBox}>
                                            <span className={styles.cordinatorDetail}>{item?.name}</span>
                                            <span className={styles.cordinatorDetail}>{item?.contact}</span>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
