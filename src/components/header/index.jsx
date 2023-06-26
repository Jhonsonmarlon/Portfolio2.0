import React from "react";
import { Container, Background, BackgroundFade, Content } from "./styles";

const backgroundLink =
  "https://escolaeducacao.com.br/wp-content/uploads/2021/07/curso-gratuito-programacao-750x430.jpg";

const Header = () => {
  return (
    <Container>
      <BackgroundFade />
      <Background src={backgroundLink} />
      <Content>
        <span>Bem vindo 👋, I' am</span>
        <h1>Jhonson Marlon</h1>
        <span className="up">Analist and Developer</span>
      </Content>
    </Container>
  );
};

export default Header;
