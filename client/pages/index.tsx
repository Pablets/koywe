import { Typography } from '@material-tailwind/react'
import type { NextPage } from 'next'
// import Link from 'next/link'
// import { Layout } from '@components/Layout'
// import { useCookie } from '@hooks/cookie'
// import buildClient from 'api/build-client'

const Home: NextPage = () => {
    return (
        <div className="h-screen w-full text-center">
            <Typography variant="h2">Welcome to Koiwe Challenge!</Typography>
        </div>
    )
}

export default Home
