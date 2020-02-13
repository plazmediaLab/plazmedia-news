import React, { Fragment } from 'react';
import styled from '@emotion/styled';

import Header from './components/Hedaer'
import Formulario from './components/Formulario'


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
  return (
    <Fragment>
      <Header tittle='PLAZmedia' tag='NEWS'/>
      <Container className="container">
        <div className="box-shadow-s">
          <Formulario />
        </div>
      </Container>
    </Fragment>
  );
}

export default App;
