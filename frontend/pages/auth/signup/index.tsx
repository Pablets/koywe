import { Console } from 'console'
import Router from 'next/router'
import { AuthContext, AuthContextProps } from 'pages/_app'
import { useContext, useState } from 'react'
import useRequest from '../../../hooks/use-request'
// import { useAsyncRequest } from '@hooks/useAsyncRequest'

const Signup = () => {
    const { setLoginCb } = useContext(AuthContext) as AuthContextProps

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const { callRoute } = useAsyncRequest()

    const { doRequest } = useRequest({
        url: 'http://localhost:3001/api/users/signup',
        method: 'post',
        body: { email, password },
        onSuccess: () => {
            setLoginCb({ email, password })
            Router.push('/')
        },
    })

    const onSubmit = async (event: any) => {
        event.preventDefault()
        await doRequest()
    }

    return (
        <form className="m-4 rounded border-2 border-gray-500 bg-gray-200 p-2" onSubmit={onSubmit}>
            <h1 className="text-lg">Sign Up</h1>
            <div className="my-2 flex flex-col border-2 border-gray-300">
                <label className="text-sm">Email Address</label>
                <input className="text-lg" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="my-2 flex flex-col border-2 border-gray-300">
                <label className="text-sm">Password</label>
                <input
                    className="text-lg"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                />
            </div>

            <button className="bg-amber-500 p-2">Sign Up</button>
        </form>
    )
}

export default Signup
