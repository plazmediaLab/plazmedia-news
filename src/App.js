import React, { Fragment, useState, useEffect } from 'react';
import styled from '@emotion/styled';

import Header from './components/Hedaer';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';


const Container = styled.div`

  > div{
    background-color: var(--gray-background-1);
    padding: 1rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    border-radius: .4em;
    border: .1rem solid var(--gray-background-2);
  }

  @media (min-width: 598px){
    > div{
      padding: 2rem;
    }
  }
`;


function App() {

  // STATE de las categorías
  const [categoria, guardarCategoria] = useState('');
  // STATE del array de noticias
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const listadoNoticias = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=d7ba813873cf4b67aad186a3bfff2ee6`;

      const consulta = await fetch(url);
      const resultado = await consulta.json();

      guardarNoticias(resultado.articles);
    };
    listadoNoticias();
  }, [categoria]);

  // console.log(noticias);

  return (
    <Fragment>
      <Header tittle='News' tag='NOW'/>
      <Container className="container">
        <div className="box-shadow-s">
          <Formulario 
            guardarCategoria={guardarCategoria}
          />
        </div>
      </Container>
      <ListadoNoticias 
        noticias={noticias}
      />
    </Fragment>
  );
}

export default App;
