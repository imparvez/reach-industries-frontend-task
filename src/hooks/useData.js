import { useState, useEffect } from 'react'
import getData from '../api'


function useData(apiUrl) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        getData(apiUrl)
            .then((response) => {
                setData(response)
            })
            .catch((err) => setError(err))
            .finally(() => setLoading(false))
    }, []);

    return [
        data,
        loading,
        error,
    ]
}

export default useData