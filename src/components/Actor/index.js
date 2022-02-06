import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { Wrapper, Image } from './Actor.styles';

const Actor = ({name: Name, character, imageUrl}) => (
    <Wrapper>
        <Image src={imageUrl} alt='actor-thumb' />
        <h3>{Name}</h3>
        <p>{character}</p>
    </Wrapper>
);

Actor.propTypes = {
    Name : PropTypes.string,
    character : PropTypes.string,
    imageUrl : PropTypes.string
}


export default Actor;