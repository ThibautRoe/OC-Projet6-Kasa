import { useState, useEffect } from 'react'

export function useFetch(url) {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        if (!url) return
        setLoading(true)
        async function fetchData() {
            try {
                await new Promise(resolve => setTimeout(resolve, 2000)); /* TODO : timeout à enlever, servait à tester l'affichage du loader */
                const response = await fetch(url)
                const data = await response.json()
                setData(data)
            } catch (err) {
                console.log(err)
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [url])
    return { data, isLoading, error }
}