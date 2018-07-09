import React from 'react';
import './RegularError.css';

function RegularError(props) {
  return (
    <div className="Error-div">
      <h1 className="Title-error"> Ha ocurrido un error :(</h1>
      <p className="blue">Es posible que el error se solucione en los próximos minutos</p>
      <a className="btn-error" href="#">Recarga la página</a>
    </div>
  )
}

export default RegularError;
