import { createContext, useEffect, useState } from 'react'
import '/styles/globals.css'
import { ThemeProvider } from '@material-tailwind/react'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from 'redux/store'
import { Layout } from 'layout/Layout'
import { useCookie } from '@hooks/cookie'

type UserPayload = {
    id: string
    email: string
} | null
export interface AuthContextProps {
    currentUser: UserPayload
    logged: boolean
    setLoginCb: (value: UserPayload) => void
}

export const AuthContext = createContext<AuthContextProps | null>(null)

const MyApp = ({ Component, pageProps }: AppProps) => {
    const { callRoute, hasUser } = useCookie()

    useEffect(() => {
        callRoute('api/users/currentuser')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [currentUser, setCurrentUser] = useState<UserPayload | null>(null)

    const setLoginCb = (value: UserPayload) => {
        callRoute('api/users/currentuser')
        setCurrentUser(value)
    }

    return (
        <Provider store={store}>
            <ThemeProvider>
                <AuthContext.Provider value={{ currentUser, logged: hasUser, setLoginCb }}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </AuthContext.Provider>
            </ThemeProvider>
        </Provider>
    )
}

export default MyApp
