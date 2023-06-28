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
        <span>Bem vindo 👋, Eu sou</span>
        <h1>Jhonson Marlon</h1>
        <span className="up">Analist and Developer</span>
        <a style=
          "
          border: 1px solid #97cadb;
          padding: 13px;
          border-radius: 5px;
          color: #ffffff;
          text-decoration: none;
          font-weight: bold;
          "
          href="www.jhonsonmarlon.com.br/portfolio/assets/docs_avulsos/Curriculo_Jhonson_Marlon.pdf" target="_blank">Download CV</a>
      </Content>
    </Container>
  );
};

export default Header;
