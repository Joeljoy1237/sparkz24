// "use client"

import Credits from '@/widgets/Credits'
import EventListPage from '@/widgets/EventListPage'
import Footer from '@/widgets/Footer'
// import { useRouter } from 'next/router'
import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'

const DynamicHeader = dynamic(() => import('@/widgets/EventListPage'), {
  loading: () => <p>Loading...</p>,
})

export default function page() {
  // const router = useRouter();
  // console.log(router.query)
  return (
    <>
      <Suspense fallback={<div>loading</div>}>
        <DynamicHeader />
        {/* <EventListPage /> */}
      </Suspense>
      <Footer />
      <Credits />
    </>
  )
}
