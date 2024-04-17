"use client"
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import styles from '@styles/scss/slider.module.scss'
import LeftIcon from '@/common/icons/Left'
import RightIcon from '@/common/icons/RightIcon'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

export default function Slider({
    events
}) {
    const router = useRouter()
    return (
        <div className={styles.container}>
            <div className={styles.sliderContainer}>
                {events?.map((event) => (
                    <Image alt='event' key={event?._id} onClick={()=>{
                        //consoleevent)
                        // router.push('/'+event?._id)
                        toast.info("Registration starts soon.",{
                          position:"bottom-center",
                          theme:"dark"
                        })
                      }} className={styles.poster} src={event?.imgUrl ? event?.imgUrl : event?.posterImg} height={1000} width={1000} />
                ))}
            </div>
        </div>
    )
}
