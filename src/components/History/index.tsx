import Image from "next/image";
import { Container, Heading, Section } from "../shared";

export function History() {
  return (
    <Section paddingY={204}>
      <Container maxWidth={800} textAlign="center">
        <div style={{marginBottom: 32}}>
          <Image
            width={124}
            height={46}
            src="/images/arrow.png"
            alt="Símbolo de uma flecha em curva"
          />
        </div>

        <Heading level={2} fontSize={32} textAlign="center" marginBottom={8}>O Projeto Cambia é fruto da troca.</Heading>
        <p>
          Nossa história começou quando um de nossos fundadores participou de
          uma experiência de voluntariado na França. Em atuação desde 2005, o
          grupo Échanges Phocéens (“Trocas em Marselha”) proporciona momentos de{" "}
          <strong>
            troca entre jovens tutores universitários e crianças e adolescentes
            de escolas de baixa renda
          </strong>
          .
        </p>
      </Container>
    </Section>
  );
}
