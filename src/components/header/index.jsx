import React from "react";
import { Container, Background, BackgroundFade, Content } from "./styles";

const backgroundLink =
  "https://firebasestorage.googleapis.com/v0/b/jhonsonportfolio.appspot.com/o/imgs_port%2Fbackground.jpg?alt=media&token=1ebdbaf2-3a64-4ccf-900a-f97203414464&_gl=1*6fcu6a*_ga*MjAxMjA3Nzc0NS4xNjk2MjczNDAz*_ga_CW55HF8NVT*MTY5OTM2NDA1Mi4xOC4xLjE2OTkzNjU2NzAuNTYuMC4w";

const Header = () => {
  return (
    <Container>
      <BackgroundFade />
      <Background src={backgroundLink} />
      <Content>
        <span>Bem vindo 👋, Eu sou</span>
        <h1>Jhonson Marlon</h1>
        <span className="up">Analist and Developer</span>
        <a href="https://database-ifrr.jhonsonmarlon.com.br/assets/Curriculo_Jhonson_Marlon.pdf" target="_blank">Download CV</a>
      </Content>
    </Container>
  );
};

export default Header;
