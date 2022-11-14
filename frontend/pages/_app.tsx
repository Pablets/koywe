import { createContext, useState } from 'react'
import '/styles/globals.css'
import { ThemeProvider } from '@material-tailwind/react'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from 'redux/store'
import { Layout } from 'layout/Layout'

type CurrentUsertype = {
    email: string
    password: string
}
export interface AuthContextProps {
    currentUser: CurrentUsertype | null
    logged: boolean
    setLoginCb: (value: CurrentUsertype | null) => void
}

export const AuthContext = createContext<AuthContextProps | null>(null)

const MyApp = ({ Component, pageProps }: AppProps) => {
    const [currentUser, setCurrentUser] = useState<CurrentUsertype | null>(null)

    const [logged, setLogged] = useState(false)

    const setLoginCb = (value: CurrentUsertype | null) => {
        setLogged(Boolean(value?.email))
        setCurrentUser(value)
    }

    return (
        <Provider store={store}>
            <ThemeProvider>
                <AuthContext.Provider value={{ currentUser, logged, setLoginCb }}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </AuthContext.Provider>
            </ThemeProvider>
        </Provider>
    )
}

export default MyApp
