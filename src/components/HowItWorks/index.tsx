import Image from "next/image";
import { Box, Container, GridContainer, Heading, Section } from "../shared";

export function HowItWorks() {
  return (
    <Section paddingY={125}>
      <Container maxWidth={1344}>
        <Heading fontSize={32} marginBottom={64} marginBottomMobile={32}>
          Como funciona?
        </Heading>
        <GridContainer gap={96}>
          <Box>
            <p>01</p>
            <Box height={200} display="flex" justifyContent="center">
              <Image
                width={117}
                height={80}
                src="/images/icon-brand-1.svg"
                alt="Logo Projeto Cambia"
              />
            </Box>

            <Heading fontSize={21} marginBottom={8}>
              Alunos com curiosidade de conhecer outras formas de aprender e
              ensinar.
            </Heading>
            <p>
              O Projeto Cambia cria pontes entre alunos de escolas públicas e
              jovens universitários e recém-formados que buscam reinventar as
              maneiras de adquirir conhecimento.
            </p>
          </Box>
          <Box>
            <p>02</p>
            <Box height={200} display="flex" justifyContent="center">
              <Image
                width={116}
                height={114}
                src="/images/icon-brand-2.svg"
                alt="Logo Projeto Cambia"
              />
            </Box>
            <Heading fontSize={21} marginBottom={8}>
              Encontros semanais que proporcionam trocas de saberes e
              experiências.
            </Heading>
            <p>
              Nossos módulos são criados com o objetivo de estimular o
              pensamento crítico e o desbravamento de novos conhecimentos,
              sempre de maneira lúdica e interativa.
            </p>
          </Box>
          <Box>
            <p>03</p>
            <Box height={200} display="flex" justifyContent="center">
              <Image
                width={141}
                height={88}
                src="/images/icon-brand-3.svg"
                alt="Logo Projeto Cambia"
              />
            </Box>
            <Heading fontSize={21} marginBottom={8}>
              Contribuição para o desenvolvimento do senso de cidadania.
            </Heading>
            <p>
              Diminuindo a distância entre escolas públicas e universidades,
              buscamos fortalecer a rede comunitária, conectando pessoas, ideias
              e projetos e colaborando para a educação e o desenvolvimento
              humano.
            </p>
          </Box>
        </GridContainer>
      </Container>
    </Section>
  );
}
