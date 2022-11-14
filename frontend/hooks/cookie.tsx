import { useState, useCallback, useEffect } from 'react'
import jwt from 'jsonwebtoken'

export const useCookie = () => {
    const [hasUser, setHasUser] = useState<boolean>(false)
    const [isMounted, setIsMounted] = useState<boolean>(false)
    const callRoute = async (route: string): Promise<void> => {
        try {
            await fetch(`http://localhost:3001/${route}`, {
                method: 'get',
                credentials: 'include',
            })
            setUser()
        } catch (err) {
            console.error(`Error: ${err}`)
        }
    }

    const getCookies = () => {
        // { [index: string]: string }
        const getAllCookies = document.cookie

        const user = (getAllCookies && jwt.verify(getAllCookies?.split('=')?.[1]?.trim(), 'asdf')) || null

        return user
    }

    const setUser = useCallback(() => {
        const user = getCookies()

        user ? setHasUser(true) : setHasUser(false)
    }, [])

    useEffect(() => {
        setIsMounted(true)
    }, [])
    useEffect(() => {
        if (isMounted) {
            setUser()
        }
    }, [isMounted, setUser])

    return {
        callRoute,
        hasUser,
    }
}
