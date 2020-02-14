import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import Noticia from './Noticia';


const ContenedorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media (max-width: 930px){
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 589px){
    grid-template-columns: repeat(2, 1fr);
  }
`;


const ListadoNoticias = ( {noticias} ) => {

  return (
    <div className="container">
      <ContenedorGrid>
        {noticias.map(noticia => (
          <Noticia 
            key={noticia.url}
            noticia={noticia}
          />
        ))}
      </ContenedorGrid>
    </div>
  );
};


ListadoNoticias.propTypes = {
  noticias: PropTypes.array.isRequired,
}


export default ListadoNoticias