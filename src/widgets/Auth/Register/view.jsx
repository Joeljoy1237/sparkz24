"use client"

import React, { useState } from 'react'
import styles from '@styles/scss/register.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { userRegister } from '@/services/Register'
import { useRouter } from 'next/navigation'

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [college, setCollege] = useState("");
  const [department, setDepartment] = useState("");
  const [semester, setSemester] = useState("");
  const [password, setPassword] = useState("");
const [loading,setLoading]= useState(false)

  const router = useRouter();

  const handleSubmit = async () => {
    const res = await userRegister(
      firstName,
      lastName,
      email,
      mobileNo,
      college,
      department,
      semester,
      password,
      setLoading
      // toast
    );

    if (res) {
      setTimeout(() => {
        router.push('/login')
      }, 400);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <div className={styles.left}>
            <div className={styles.row}>
              <div className={styles.InputBox}>
                <span className={styles.title}>Welcome !</span>
              </div>
            </div>
            <div className={styles.row}>


              <div className={styles.InputBox}>
                <span className={styles.label}>First Name</span>
                <input onChange={(e) => {
                  setFirstName(e.target.value);
                }} type="text" className={styles.txtBox} placeholder='John' />
              </div>
              <div className={styles.InputBox}>
                <span className={styles.label}>Last Name</span>
                <input onChange={(e) => {
                  setLastName(e.target.value);
                }} type="text" className={styles.txtBox} placeholder='Michael' />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.InputBox}>
                <span className={styles.label}>Email</span>
                <input onChange={(e) => {
                  setEmail(e.target.value);
                }} type="email" className={styles.txtBox} placeholder='example@gmail.com' />
              </div>
              <div className={styles.InputBox}>
                <span className={styles.label}>Mobile Number</span>
                <input onChange={(e) => {
                  setMobileNo(e.target.value);
                }} type="text" className={styles.txtBox} placeholder='7907247909' />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.InputBox}>
                <span className={styles.label}>College/School</span>
                <input onChange={(e) => {
                  setCollege(e.target.value);
                }} type="text" className={styles.txtBox} placeholder='Carmel college of engineering & technology' />
              </div>
              <div className={styles.InputBox}>
                <span className={styles.label}>Department/Class</span>
                <input onChange={(e) => {
                  setDepartment(e.target.value);
                }} type="text" className={styles.txtBox} placeholder='Computer Science & Engineering' />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.InputBox}>
                <span className={styles.label}>Semester(only for college students)</span>
                <input onChange={(e) => {
                  setSemester(e.target.value);
                }} type="text" className={styles.txtBox} placeholder='S4' />
              </div>
              <div className={styles.InputBox}>
                <span className={styles.label}>Password</span>
                <input onChange={(e) => {
                  setPassword(e.target.value);
                }} type="password" className={styles.txtBox} placeholder='12345678' />
              </div>
            </div>

            <div className={styles.row}>
              <button disabled={loading} className={styles.submit} onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}>{loading ? "Please wait..." : "Submit"}</button>
            </div>
            <div className={styles.help}>
              <span className={styles.helpText}>Already have an account ? <span className={styles.high}><Link href="/login">Login</Link></span></span>
            </div>

          </div>


          <div className={styles.right}>
            <Image alt='register' src="/gifs/party.gif" height={1000} width={1000} className={styles.gif} />
          </div>
        </div>
      </div>
    </div>
  )
}
