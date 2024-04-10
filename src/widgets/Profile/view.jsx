"use client"

import React, { useEffect, useState } from 'react'
import styles from '@styles/scss/profile.module.scss'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify';
import Image from 'next/image'
import Register from '@/common/icons/Register';
import Ticket from '@/common/components/Ticket';
import TicketIcon from '@/common/icons/Ticket';

export default function Profile() {
  const [user, setUser] = useState(null);
  const router = useRouter();
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')))
    if (!localStorage.getItem('accessToken')) {
      router.replace('/login');
    }
  }, [])
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.row}>
          <span className={styles.profile}>Your Profile</span>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>
            <div className={styles.profileBox}>
              <div className={styles.boxRowWelcome}>
                <span className={styles.welcome}>Welcome, 👋 {user?.firstName} {user?.lastName}</span>
              </div>
              <div className={styles.hr}></div>
              <div className={styles.boxRow}>
                <span className={styles.welcome}>Registered Events</span>
                <Register className={styles.icon} />
              </div>
              <div className={styles.hrbtm}></div>
              {/* <div className={styles.boxRow} onClick={()=>{
                router.push('/ticket')
              }}>
                <span className={styles.welcome}>View Your Ticket</span>
                <TicketIcon className={styles.icon} />
              </div> */}
              <div className={styles.boxRow}>
                <button className={styles.logout} onClick={() => {
                  localStorage.clear();
                  toast.success('Logout successfull', {
                    theme: "colored",
                    position: "bottom-center"
                  })
                  setTimeout(() => {
                    window.location.replace('/')
                }, 1000);
                }}>
                  Logout
                </button>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.rightBox}>
              <div className={styles.rightRow}>
                <div className={styles.rightLeft}>
                  <Image src={"/images/ast.png"} height={1000} width={1000} className={styles.img} />
                </div>
                <div className={styles.rightRight}>
                  <div className={styles.rightBoxRow}>
                    <div className={styles.placeholder}>
                      <span className={styles.place}>First name</span>
                      <div className={styles.value}>
                        <span className={styles.user}>{user?.firstName}</span>
                      </div>
                    </div>

                    <div className={styles.placeholder}>
                      <span className={styles.place}>Last name</span>
                      <div className={styles.value}>
                        <span className={styles.user}>{user?.lastName}</span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.rightBoxRow}>
                    <div className={styles.placeholder}>
                      <span className={styles.place}>Email</span>
                      <div className={styles.value}>
                        <span className={styles.user}>{user?.email}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.rightRow}>

              <div className={styles.rightBoxRow}>
                <div className={styles.placeholder}>
                  <span className={styles.place}>College</span>
                  <div className={styles.value}>
                    <span className={styles.user}>{user?.college}</span>
                  </div>
                </div>
              </div>

            </div>

            <div className={styles.rightRow}>

              <div className={styles.rightBoxRow}>
                <div className={styles.placeholder}>
                  <span className={styles.place}>Semester</span>
                  <div className={styles.value}>
                    <span className={styles.user}>{user?.semester}</span>
                  </div>
                </div>
              </div>

              <div className={styles.rightBoxRow}>
                <div className={styles.placeholder}>
                  <span className={styles.place}>Department</span>
                  <div className={styles.value}>
                    <span className={styles.user}>{user?.department}</span>
                  </div>
                </div>
              </div>

              {/* <div className={styles.rightBoxRow}>
                <div className={styles.placeholder}>
                  <span className={styles.place}>Mobile no.</span>
                  <div className={styles.value}>
                    <span className={styles.user}>{user?.mobileNo}</span>
                  </div>
                </div>
              </div> */}


            </div>

          </div>
        </div>
        {/* <div className={styles.ticketRow}>
          <div className={styles.ticketRight}>
            <Ticket/>
          </div>
          <div className={styles.ticketLeft}>
            hi
          </div>
        </div> */}
      </div>
    </div>
  )
}
