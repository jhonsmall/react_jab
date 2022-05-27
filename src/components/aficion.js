import React from 'react';

const Aficion = ({ nombre = 'jhonsmall', aficion = 'nenas...' }) => {
  return (
    <>
      <div>La afición de </div> <div className="nombre">{nombre}</div>{' '}
      <div>es</div> <div className="aficion">{aficion}</div>
    </>
  );
};

export default Aficion;
