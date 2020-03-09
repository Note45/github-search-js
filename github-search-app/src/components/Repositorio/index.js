import React from 'react';

import './styles.css'

function Repositorio({ data }) {
  return(
    <div id='repoElement'>
      <p id='name'>{data.name}</p>
      <p id='descricao'>{data.description}</p>
      <button onClick={()=>{window.open(data.html_url, '_blank')}}>Acessar</button>
    </div>
  );
};

export default Repositorio;