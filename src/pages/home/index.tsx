import React from "react";
import MostViewedProducts from '../../components/most-viewed-products'
import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <h1> Conteúdo da Home </h1>
      <MostViewedProducts />
    </Container>
  );
};

export default Home;
