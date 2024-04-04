// "use client"

import Credits from '@/widgets/Credits'
import EventListPage from '@/widgets/EventListPage'
import Footer from '@/widgets/Footer'
// import { useRouter } from 'next/router'
import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Loader from '@/common/components/Loader'

const DynamicHeader = dynamic(() => import('@/widgets/EventListPage'), {
  loading: () => <Loader />,
})

export default function page() {
  // const router = useRouter();
  // console.log(router.query)
  return (
    <>
      <Suspense fallback={<Loader/>}>
        <DynamicHeader />
        {/* <EventListPage /> */}
      </Suspense>
      <Footer />
      <Credits />
    </>
  )
}
