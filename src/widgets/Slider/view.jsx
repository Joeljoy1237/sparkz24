"use client"
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import styles from '@styles/scss/slider.module.scss'
import LeftIcon from '@/common/icons/Left'
import RightIcon from '@/common/icons/RightIcon'

export default function Slider({
    events
}) {
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef();

    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;
        console.log(distance)
        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${200 + distance}px)`;
        }
        if (direction === "right" && slideNumber < events?.length - 1) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-200 + distance}px)`;
        }
    };
    return (
        <div className={styles.container}>
            <div className={styles.leftwrap} onClick={() => {
                handleClick("left")
            }} style={{ display: !isMoved && "none" }}>
                <LeftIcon className={styles.leftIcon} />
            </div>
            <div className={styles.sliderContainer} ref={listRef}>
                {events?.map((event) => (
                    <Image className={styles.poster} src={event?.imgUrl ? event?.imgUrl : event?.posterImg} height={250} width={250} />
                ))}
            </div>
            <div className={styles.rightwrap} onClick={() => {
                handleClick("right")
            }}>
                <RightIcon className={styles.leftIcon} />
            </div>
        </div>
    )
}
