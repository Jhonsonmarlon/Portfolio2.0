import React from "react";
import { Container, Content, Card } from "./styles";

import { RiPenNibFill, RiServerFill } from "react-icons/ri";
import { BiCodeBlock } from "react-icons/bi";

const Services = () => {
  return (
    <Container>
      <h1 style="user-select: none;">Serviços</h1>
      <p style="user-select: none;">Um poucos do serviços que tenho a oferecer!</p>
      <Content>
        <Card>
          <RiPenNibFill size={"100px"} />
          <h2 style="user-select: none;">Analista de Dados</h2>
          <p style="user-select: none;">
            Desenvolvo fórmulas ou alternativas demonstrativas para,
            representação de dados e estatísticas, fazendo avaliação
            de projetos.
          </p>
        </Card>
        <Card>
          <BiCodeBlock size={"100px"} />
          <h2 style="user-select: none;">Front-End</h2>
          <p style="user-select: none;">
            Desenvolvo sites profissionais, blogs, portfólios,
            aplicativos, landing pages e e-commerce.
          </p>
        </Card>
        <Card>
          <RiServerFill size={"100px"} />
          <h2 style="user-select: none;">Backend</h2>
          <p style="user-select: none;">
            Desenvolvo toda parte do lado do servidor, com banco de dados e
            criação de Apis para alimentar a aplicação web.
          </p>
        </Card>
      </Content>
    </Container>
  );
};
export default Services;
