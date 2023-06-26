import React from "react";
import {
  Container,
  Content,
  BackgroundFade,
  Localize,
  Links,
  LinksContainer,
} from "./styles";

import {
  RiMailOpenLine,
  RiDiscordLine,
  RiWhatsappLine,
  RiMapPin2Line,
  RiGithubLine,
  RiInstagramLine,
} from "react-icons/ri";

const Contact = () => {
  const handleEmail = () => {
    window.open("mailto:j.marlon.developer@gmail.com", "_blank");
  };

  const handleGithub = () => {
    window.open("https://github.com/Jhonsonmarlon", "_blank");
  };

  const handleInstagram = () => {
    window.open("https://www.instagram.com/Jhonson_marlon", "_blank");
  };

  const handleDiscord = () => {
    const discordUsername = "Cyb3JJ";

    navigator.clipboard.writeText(discordUsername);
    alert("Usuario do discord copiado para area de transferencia!");
  };

  const handleWhatsApp = () => {
    const phoneNumber = "5595981049469";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <Container>
      <BackgroundFade />
      <h1>Contato</h1>
      <p>
        Gostou? Conte-me sobre suas oportunidades de trabalho disponíveis ou
        apenas diga Olá! 😃
      </p>
      <Content>
        <Localize>
          <RiMapPin2Line size={"27px"} />
          <p>Roraima - Brasil</p>
        </Localize>
        <LinksContainer>
          <Links onClick={handleEmail}>
            <RiMailOpenLine size={"47px"} />
          </Links>
          <Links onClick={handleGithub}>
            <RiGithubLine size={"47px"} />
          </Links>
          <Links onClick={handleInstagram}>
            <RiInstagramLine size={"47px"} />
          </Links>
          <Links onClick={handleDiscord}>
            <RiDiscordLine size={"47px"} />
          </Links>
          <Links onClick={handleWhatsApp}>
            <RiWhatsappLine size={"47px"} />
          </Links>
        </LinksContainer>
      </Content>
    </Container>
  );
};

export default Contact;
