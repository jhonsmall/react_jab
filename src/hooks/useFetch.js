import React, { useEffect } from 'react'

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

const useFetch = (api) => {
    console.log('useFetch');
    console.log(api);
    const [values, setValues] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    useEffect(() => {
        setLoading(true)
        fetch(api)
            .then(handleErrors)
            .then((res) => res.json())
            .then((data) => {
                setLoading(false)
                setValues(data.results)
                console.log('Results');
                console.log(data.results);
            }).catch((err) => {
                setLoading(false)
                setError(err)
            })
    }, [api])

    return {
        values,
        setValues,
        loading,
        error,
        handleErrors
    }
}

export default useFetch