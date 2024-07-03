import React from 'react';
import { CardContainer, CardImage, CardTitle, CardButton } from './styles';

const Card: React.FC = () => {
  return (
    <CardContainer>
      <CardImage />
      <CardTitle>Resumo</CardTitle>
      <CardButton>ACESSAR</CardButton>
    </CardContainer>
  );
};

export default Card;
