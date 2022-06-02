import {useState, useEffect} from 'react'

const useResults = (api) => {

  const [isLoading, setIsLoading] = useState(true);
  const [values, setValues] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isLoading) {
      async function fetchData() {
        try {
          const response = await fetch(
            api
          );
          if (response.ok) {
            const data = await response.json();
            setValues(data.results);
            setError(null);
            setIsLoading(false);
            console.log('Results');
            console.log(data.results);
          } else {
            setError('Hubo un error al obtener los datos');
          }
        } catch (error) {
          setError('No pudimos hacer la solicitud para obtener los datos');
        }
      }
      fetchData();
    }
  }, [isLoading, api]);

  return {
    isLoading,
    setIsLoading,
    values,
    error,
  }
}

export default useResults