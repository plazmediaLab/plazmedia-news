import React from 'react';
import styled from '@emotion/styled';


const TittleH1 = styled.h1`
  font-weight: 600;
  color: var(--White);
  margin: 0;

  span{
    color: var(--sunflower-dark-2);
    background-color: var(--sunflower-light-1);
  }
`;


const Header = ( {tittle, tag} ) => {
  return (
    <div className="container-100 bg-skyblue txt-a-c vp-1">
      <TittleH1>{tittle} <span className="tag tag-c">{tag}</span></TittleH1>
    </div>
  );
};

export default Header