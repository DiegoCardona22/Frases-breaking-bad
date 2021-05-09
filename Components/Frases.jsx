import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';

const ContenedorFrase = styled.div`
    background-color: white;
    border-radius: .5rem;
    margin-top: 15rem;
    max-width: 900px;
    padding: 3rem;
    @media (min-width: 992px) {
        margin-top: 16rem
    }
    h1 {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.2rem;
        padding-left: 4rem;
        position: relative;
        text-align: center;
        &::before{
            color: black;
            content: open-quote;
            font-size: 10rem;
            left: -1rem;
            position: absolute;
            top: -2rem;
        }
    }
    p {
        color: #666;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.2rem;
        font-weight: bold;
        margin-top: 2rem;
        text-align: right;
    }
`;

const Frases = ({frase}) => {
    return(
        <ContenedorFrase>
            <h1>{frase.quote}</h1>
            <p>- {frase.author}</p>
        </ContenedorFrase>
    );
};

Frases.propTypes = {
    frase: PropTypes.object.isRequired
};

export default Frases;