import axios, { AxiosRequestConfig } from 'axios'
import { useState } from 'react'

interface useRequestProps {
    url: string
    method?: string
    body?: any
    onSuccess?: (data: any) => void
    config?: AxiosRequestConfig
}

const useRequest = ({ url, method = 'get', body, onSuccess, config }: useRequestProps) => {
    const [error, setError] = useState<any>()
    const [loading, setLoading] = useState<boolean>(false)

    const doRequest = async () => {
        try {
            setLoading(true)
            setError(undefined)

            const defaultConf: AxiosRequestConfig = {
                data: body,
                method,
                withCredentials: true,
            }
            const response = await axios(url, { ...defaultConf, ...config })

            if (onSuccess) {
                setLoading(false)
                onSuccess(response.data)
            }

            return response.data
        } catch (err) {
            setLoading(false)
            setError(err)
        }
    }

    return { doRequest, error, loading }
}

export default useRequest
