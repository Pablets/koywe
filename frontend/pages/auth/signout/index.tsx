import { useContext, useEffect } from 'react'
import Router from 'next/router'
import useRequest from '../../../hooks/use-request'
import { AuthContext, AuthContextProps } from 'pages/_app'

const Signout = () => {
    const { setLoginCb } = useContext(AuthContext) as AuthContextProps
    const { doRequest } = useRequest({
        url: 'http://localhost:3001/api/users/signout',
        method: 'post',
        body: {},
        onSuccess: () => {
            Router.push('/')
            setLoginCb(null)
        },
    })

    useEffect(() => {
        doRequest()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <div>Signing you out...</div>
}

export default Signout
