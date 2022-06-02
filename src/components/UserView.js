import React, { useState, useEffect } from 'react';
import useResults from '../hooks/useResults';
// import useFetch from '../hooks/useFetch';
import TarjetaUser from './TarjetaUser';

const UserView = () => {
  /*  
  const [isLoading, setIsLoading] = useState(true);
  const [values, setValues] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (isLoading) {
      async function fetchData() {
        try {
          const response = await fetch(
            'https://randomuser.me/api/?results=4&nat=us'
          );
          if (response.ok) {
            const data = await response.json();
            setValues(data.results);
            setError(null);
            setIsLoading(false);
            console.log('Results');
            console.log(data.results);
          } else {
            setError('Hubo un error al obtener el perrito');
          }
        } catch (error) {
          setError('No pudimos hacer la solicitud para obtener el perrito');
        }
      }
      fetchData();
    }
  }, [isLoading]);

  */

  const { isLoading, setIsLoading, values, error } = useResults(
    'https://randomuser.me/api/?results=4&nat=us'
  );

  const randomDog = (e) => {
    e.preventDefault();
    console.log('more...');
    setIsLoading(true);
  };

  if (isLoading) {
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }
  if (error) {
    // ⬅️ mostramos el error (si es que existe)
    return (
      <div className="App">
        <h1>{error}</h1>
        <button onClick={(e) => randomDog(e)}>Volver a intentarlo</button>
      </div>
    );
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-1">
            <button className="btn btn-primary m-3" onClick={(e) => randomDog(e)}>
              Load...
            </button>
          </div>
        </div>
        <div className="row">
          {values.map((persona) => (
            <TarjetaUser key={persona.login.uuid} persona={persona} />
          ))}
        </div>
      </div>
    </>
  );
};

export default UserView;
