import axios from 'axios'

const buildClient = () => {
    return axios.create({
        baseURL: 'http://localhost:3001/',
    })
}

// export default buildClient
