import React from 'react'
import { useFetch } from '../hooks/useFetch'

const HooksPersonalizados = () => {

    let url = 'https://pokeapi.co/api/v2/pokemon/'
    url = 'https://jsonplaceholder.typicode.com/users'


    let { data, isPending, error } = useFetch(url)

    return (
        <>
            <h2>Hooks Personalizados</h2>
            <h3>{JSON.stringify(isPending)}</h3>
            <h3>
                <mark>
                    {JSON.stringify(error)}
                </mark>
            </h3>
            <h3>
                <pre style={{ whiteSpace: 'pre-wrap' }}>
                    {JSON.stringify(data)}
                </pre>
            </h3>
        </>
    )
}

export default HooksPersonalizados
