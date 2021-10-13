import Image from "next/image";
import styled from "styled-components";
import { Container, GridContainer, Section } from "../shared";

export function AboutCambia() {
  return (
    <Section bgColor="yellow-500" paddingY={64}>
      <Container maxWidth={1344}>
        <GridContainer gap={48} alignItems="center">
          <BoxImage>
            <Image
              width={644}
              height={644}
              src="/images/projeto-cambia-sala-de-aula.png"
              alt="Alunos em sala de aula"
            />
          </BoxImage>
          <P>
            O Projeto Cambia é uma ONG que propõe trocas de conhecimento entre{" "}
            <strong>universitários e alunos de escolas públicas</strong>.
            Acreditamos na potência dos encontros como forma de despertar nos
            alunos e tutores o genuíno <strong>interesse de aprender</strong>{" "}
            mais.
          </P>
        </GridContainer>
      </Container>
    </Section>
  );
}

const BoxImage = styled.div`
  img {
    border-radius: 50%;
  }

  @media (max-width: 676px) {
    margin-bottom: -96px;
    order: 1;
  }
`;

const P = styled.p`
  @media (max-width: 676px) {
    text-align: center;
  }
`;
