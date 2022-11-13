import Header from '@components/Header'
import { FC } from 'react'

export const Layout: FC = ({ children }) => (
    <div className="min-h-screen">
        <div className="w-screen">
            <Header />
            <main className="mx-auto p-6 sm:max-w-sm sm:p-0 md:max-w-md lg:max-w-screen-lg">{children}</main>
        </div>
    </div>
)
