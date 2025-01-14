"use client"

import React, { useEffect, useState } from 'react'
import styles from '@styles/scss/landingPage.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function LandingPage() {
  const targetDate = new Date("April 29, 2024").getTime();
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const tomorrow = new Date();
      tomorrow.setDate(now.getDate() + 1);
      tomorrow.setHours(9, 0, 0, 0);

      const difference = tomorrow.getTime() - now.getTime();

      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountdown(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);

    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = targetDate - now;

      if (timeRemaining > 0) {
        const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hoursRemaining = Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutesRemaining = Math.floor(
          (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        const secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        setDays(daysRemaining);
        setHours(hoursRemaining);
        setMinutes(minutesRemaining);
        setSeconds(secondsRemaining);
      } else {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className={styles.container}>
      <Image alt='logo' className={styles.bg} src="/images/bg.jpg" height={1000} width={1000} />
      <div className={styles.bgOverlay}></div>
      <div className={styles.wrapper}>
        <div className={styles.banner}>
          <Image alt='logo' src="/images/sparkzLogo.svg" height={100} width={100} className={styles.bannerImg} />
          <span className={styles.title}>SPARKZ</span>
          <span className={styles.tagline}>Innovation unleashed</span>
          <div className={styles.taglineBox}>
            <span className={styles.clg}>April 29 & 30 2024  |  Carmel College Of Engineering & Technology</span>
            <span className={styles.clgRes}>April 29 & 30 2024 </span>
            <span className={styles.clgRes}>Carmel College Of Engineering & Technology</span>
            {/* <span className={styles.clg}>Planning to bring the best event across the globe.
              Our own Sparkz CCET 2024.</span> */}
            <Link href="/all-events"><button className={styles.event}>Event Gallery</button></Link>
          </div>
          <div className={styles.timerBox}>
            <div className={styles.box}>
              <span className={styles.date}>    {days}</span>


              <span className={styles.date}>d</span>
            </div>
            :
            <div className={styles.box}>

              <span className={styles.date}>{hours}</span>


              <span className={styles.date}>h</span>
            </div>
            :
            <div className={styles.box}>
              <span className={styles.date}>{minutes}</span>

              <span className={styles.date}>m</span>
            </div>
            :
            <div className={styles.box}>
              <span className={styles.date}>{seconds}</span>

              <span className={styles.date}>s</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
