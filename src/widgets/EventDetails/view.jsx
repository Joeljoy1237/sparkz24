"use client"

import React, { useEffect, useState } from 'react'
import styles from '@styles/scss/eventDetails.module.scss'
import { useParams, useRouter } from 'next/navigation'
import { eventRegistration, getAllEvents, getEventDetails, getEventDetailsByToken } from '@/services/events/Event'
import Image from 'next/image'
import { toast } from 'react-toastify'
import Loading from '@/common/components/Loading'

export default function EventDetails() {
    const [event, setEvent] = useState({});
    const [token, setToken] = useState(null);
    const [isRegistered, setIsRegistered] = useState(false);
    const [loading, setLoading] = useState(false);
console.log(event)
    const params = useParams()
    const router = useRouter();

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        setToken(accessToken)
        if (accessToken) {
            getEventDetailsByToken(params?.id, setEvent, setIsRegistered, setLoading);
        } else {
            getEventDetails(params?.id, setEvent, setLoading);
        }
    }, [])

    const handleClick = (e) => {
        if (token) {
            e.preventDefault();
            if (params?.slug === "bsc" && !isRegistered) {
                router?.push(`/events/${params?.slug}/${event?._id}/${event?.title}`)
            } else {
                eventRegistration(params?.id, router, params?.slug, setIsRegistered)
            }
        } else {
            toast.info("Please login to continue", {
                theme: "dark"
            });
            router.push('/login')
        }
    }

    return (
        <>
            {loading || Object.keys(event).length === 0 ?
                <Loading />
                :
                <div className={styles.container}>
                    <div className={styles.wrap}>
                        <div className={styles.row}>
                            <div className={styles.box}>
                                <div className={styles.boxrow}>
                                    <div className={styles.left}>
                                        <Image src={event?.posterImg} height={1000} width={1000} className={styles.poster} />
                                        <button disabled={loading} onClick={(e) => {
                                            handleClick(e)
                                        }} className={styles.register}>{isRegistered ? "Registered" : <>{loading ? "Registering" : "Register"}</>}
                                        </button>
                                    </div>
                                            <div className={styles.hr}></div>
                                            <div className={styles.right}>
                                                <div className={styles.rightRow}>
                                                    <span className={styles.eventName}>{event?.title}</span>
                                                </div>
                                                {event?.priceCount !== 0 &&
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
                                                                    <span className={styles.prizeAmt}>{event?.secondPrize}</span>                                        </div>
                                                            }
                                                            {event?.priceCount >= 3 &&
                                                                <div className={styles.prize}>
                                                                    <Image width={1000} height={1000} className={styles.prizeicon3} src={"/images/third.png"} />
                                                                    <span className={styles.prizeAmt}>{event?.thirdPrize}</span>                                        </div>
                                                            }
                                                        </div>
                                                    </div>
                                                }
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
                                                                    <span  key={rule} className={styles.data}>🚀{" "}{rule}</span>
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
                                                    <div key={item?.name} className={styles.contactBox}>
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
            }
                </>
    )
}
