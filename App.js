import Frases from './Components/Frases';
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const Contenedor = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
`;

const Button = styled.button`
  background-size: 300px;
  background: -webkit-linear-gradient(top left, #007D35 0%,  #007D35 40%, #0F574E 100%);
  border: 2px solid black;
  color: #FFFFFF;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2rem;
  margin-top: 1rem;
  padding: 1rem 3rem;
`;
function App() {
  
  const [frase, guardarFrase] = useState({})

  const consultarAPI = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    const frase = await api.json()
    guardarFrase(frase[0])
  };
  useEffect(() =>{
    consultarAPI()
  }, [])
  return (
    <Contenedor>  
      <Frases
        frase={frase}
      />
      <Button
        onClick={consultarAPI}
      >
        Obtener frase
      </Button>
    </Contenedor>
  );
};

export default App;
