import axios from 'axios'

const sucesso = res => res

const error = err => {
    if (401 === err.response.status) {
        window.location = '/'
    } else {
        return Promise.reject(err)
    }
}

axios.interceptors.response.use(sucesso, error)