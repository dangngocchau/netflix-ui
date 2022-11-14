import React from 'react';
import backgroud from '../assets/login.jpg';
import styled from 'styled-components';

const BackgroudImage = () => {
  return (
    <Container>
      <img src={backgroud} alt='background' />
    </Container>
  );
};

export default BackgroudImage;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  img {
    height: 100vh;
    width: 100vw;
  }
`;
