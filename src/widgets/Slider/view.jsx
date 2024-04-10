"use client"
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import styles from '@styles/scss/slider.module.scss'
import LeftIcon from '@/common/icons/Left'
import RightIcon from '@/common/icons/RightIcon'
import { toast } from 'react-toastify'

export default function Slider({
    events
}) {
    return (
        <div className={styles.container}>
            <div className={styles.sliderContainer}>
                {events?.map((event) => (
                    <Image onClick={()=>{
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
