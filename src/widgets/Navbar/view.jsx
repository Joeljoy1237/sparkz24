/**
 * © SPARKZ CCET 2024. All rights reserved.
 *
 * This code is the property of SPARKZCCET 24 and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Abhishek Santhosh
 */
'use client';

import React, { useState, useEffect } from 'react';
import styles from '@styles/scss/navbar.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { navLinks } from '../../common/constants/constants'
import { MdArrowRight, MdLogin } from "react-icons/md"
import { MdAccountCircle } from "react-icons/md";
import IconMenu from '@/common/icons/MoreIcon';
import IconCloseOutline from '@/common/icons/CloseIcon';
import RightIcon from '@/common/icons/RightIcon';
import { useRouter } from 'next/navigation';

export default function Navbar() {

  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [token, setToken] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // if (typeof window !== 'undefined') {
    //   // Perform localStorage action
    // }
    setToken(localStorage.getItem('accessToken'))
  }, [])
  // localStorage.setItem('chakra-ui-color-mode', 'dark')
  const handleScroll = () => {
    setScrollPosition(window.scrollY);

    if (scrollPosition > 40 && !isNavbarFixed) {
      setIsNavbarFixed(true);
    } else if (scrollPosition <= 40 && isNavbarFixed) {
      setIsNavbarFixed(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition, isNavbarFixed]);

  return (
    <div className={styles.parent}>
      <div className={drawerOpen ? styles.open : (isNavbarFixed ? styles.styledcontainer : styles.container)}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
              <Image src="/images/sparkzLogo.svg" alt='logo' width="1" height={10} className={styles.logo} />
            <Link href="/" className={styles.left}>
              <span className={styles.logoTxt}>SPARKZ'<span className={styles.highlight}>24</span></span>
            </Link>
          </div>
          <div className={styles.center}>
            {navLinks?.map((item, index) => (
              <div className={styles.navItemBox} key={`navLink_index${item}_${index}`}>
                <Link href={item?.link} className={styles.navItem}>{item?.title}</Link>
              </div>
            ))}
          </div>
          <div className={styles.right}>
            {token ?
              <Link href='/profile' onClick={() => {
                // revalidatePath('/')
              }}>
                <MdAccountCircle className={styles.icon} />
              </Link>
              :
              <Link href='/login'>
                <MdLogin className={styles.icon} />
              </Link>
            }
          </div>
          {drawerOpen ?
            <div className={styles.resRight} onClick={() => {
              setDrawerOpen(false)
            }}>
              <IconCloseOutline className={styles.more} />
            </div>
            :
            <div className={styles.resRight} onClick={() => {
              setDrawerOpen(true)
            }}>
              <IconMenu className={styles.more} />
            </div>
          }
        </div>
      </div>
      {
        drawerOpen &&
        <div className={styles.drawer}>
          <div className={styles.drawerRow}>
            {navLinks?.map((link) => (
              <div key={link?.title} className={styles.hrRow}>
                <Link key={link?.title} onClick={() => {
                  setDrawerOpen(false)
                }} href={link?.link} className={styles.resNavItem}>
                  <span className={styles.resLink}>{link?.title}</span>
                  <RightIcon />
                </Link>
                <div className={styles.hr}></div>
              </div>
            ))}
          </div>
          <div className={styles.loginResBox}>
            {token ?
              <button className={styles.loginRes} onClick={() => {
                router.push('/profile');
                setDrawerOpen(false);
              }}><MdAccountCircle /> Profile</button>
              :
              <button className={styles.loginRes} onClick={() => {
                router.push('/login');
                setDrawerOpen(false);
              }}>Login</button>
            }
          </div>
          <div className={styles.credits}>
            <span className={styles.credit}>All rights reserved®</span>
            {/* <span className={styles.credit}>©2023 - OBCYDIANSCCET</span> */}
            {/* <span className={styles.credit}>Developed by </span> */}
          </div>
        </div>
      }
    </div>
  )
}
