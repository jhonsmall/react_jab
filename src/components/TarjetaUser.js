import React from 'react';

const TarjetaUser = ({persona}) => {
  return (
    <>
      <div className="card p-3 m-3" style={{ width: 18 + 'rem' }}>
        <img src={persona.picture.large} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            {persona.name.first} {persona.name.last}
          </h5>
          <p className="card-text">{persona.email}</p>
        </div>
      </div>
    </>
  );
}

export default TarjetaUser;
