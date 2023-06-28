import React from "react";
import { Container, Content, Card } from "./styles";

import { RiPenNibFill, RiServerFill } from "react-icons/ri";
import { BiCodeBlock } from "react-icons/bi";

const Services = () => {
  return (
    <Container>
      <h1>Serviços</h1>
      <p>Um poucos do serviços que tenho a oferecer!</p>
      <Content>
        <Card>
          <RiPenNibFill size={"100px"} />
          <h2>Analista de Dados</h2>
          <p>
            Desenvolvo fórmulas ou alternativas demonstrativas para,
            representação de dados e estatísticas, fazendo avaliação
            de projetos.
          </p>
        </Card>
        <Card>
          <BiCodeBlock size={"100px"} />
          <h2 >Front-End</h2>
          <p>
            Desenvolvo sites profissionais, blogs, portfólios,
            aplicativos, landing pages e e-commerce.
          </p>
        </Card>
        <Card>
          <RiServerFill size={"100px"} />
          <h2 >Backend</h2>
          <p>
            Desenvolvo toda parte do lado do servidor, com banco de dados e
            criação de Apis para alimentar a aplicação web.
          </p>
        </Card>
      </Content>
    </Container>
  );
};
export default Services;
