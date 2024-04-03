// "use client"

import Credits from '@/widgets/Credits'
import EventListPage from '@/widgets/EventListPage'
import Footer from '@/widgets/Footer'
// import { useRouter } from 'next/router'
import React from 'react'

export default function page() {
  // const router = useRouter();
  // console.log(router.query)
  return (
    <>
    <EventListPage/>
    <Footer/>
    <Credits/>
    </>
  )
}
