import React from "react";
import { Container, BackgroundFade, Content, SkillList } from "./styles";

import {
  DiFirebase,
  DiHtml5,
  DiPostgresql,
  DiMysql,
  DiIllustrator,
  DiJavascript1,
  DiReact,
  DiMaterializecss,
  DiVisualstudio,
  DiGithubFull,
  DiCss3Full
} from "react-icons/di";

const Skills = () => {
  return (
    <Container>
      <BackgroundFade />
      <h1>Habilidades</h1>
      <p>Algumas da tecnologias e Linguagens que eu uso!</p>
      <Content>
        <SkillList>
        <DiGithubFull size={"90px"} />
          <DiVisualstudio size={"90px"} />
          <DiCss3Full size={"90px"} />
          <DiJavascript1 size={"90px"} />
          <DiReact size={"90px"} />
        </SkillList>
        <SkillList>
          <DiMysql size={"90px"} />
          <DiIllustrator size={"90px"} />
          <DiFirebase size={"90px"} />
          <DiHtml5 size={"90px"} />
          <DiPostgresql size={"90px"} />
        </SkillList>
      </Content>
    </Container>
  );
};

export default Skills;
