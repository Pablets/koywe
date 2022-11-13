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
    const [errors, setErrors] = useState<{ message: string }[]>()

    const doRequest = async () => {
        try {
            setErrors(undefined)

            const defaultConf: AxiosRequestConfig = {
                data: body,
                method,
                withCredentials: true,
            }
            const response = await axios(url, { ...defaultConf, ...config })

            if (onSuccess) {
                onSuccess(response.data)
            }

            return response.data
        } catch (err) {
            console.log(err)
        }
    }

    return { doRequest, errors }
}

export default useRequest
