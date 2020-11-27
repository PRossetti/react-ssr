import React from 'react';
import './styles.scss';

const Main = ({ name }) => {
  console.log('HOLA MUNDO REACT SSR');

  if (typeof window === 'object') {
    console.log({ url: document.URL });
  }
  return (
    <div>{`Hola ${name} a mundo SSR!!!!!!!`}</div>
  );
}

export default Main;
