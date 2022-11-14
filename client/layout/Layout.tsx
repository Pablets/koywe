import Header from '@components/Header'
import { FC } from 'react'

export const Layout: FC = ({ children }) => (
    <div className="min-h-screen">
        <div className="w-screen">
            <Header />
            {/* sm:max-w-sm sm:p-0 md:max-w-md*/}
            <main className="mx-auto p-6 lg:max-w-screen-lg">{children}</main>
        </div>
    </div>
)
