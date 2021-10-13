import styled from "styled-components";
import { Container, Section } from "../shared";

import Image from "next/image";

export function Depoiment() {
  return (
    <Section bgColor="blue-500" color="yellow-100" paddingY={196}>
      <Container maxWidth={720}>
      <Image
        width={65}
        height={65}
        src="/images/icon-blockquote.svg"
        alt="Icone de uma aspas"
      />

        <Blockquote>
          O legal é que os tutores têm a liberdade de escolher qualquer coisa
          (desde que de acordo com os objetivos pedagógicos), então o
          voluntariado era uma atividade legal, e não necessariamente uma
          obrigação — tanto é que não se falava em voluntariado, mas sim em
          ‘troca’.
        </Blockquote>

        <Cite><strong>Frederico Maciel</strong>, idealizador e atual presidente da ONG</Cite>
      </Container>
    </Section>
  );
}

const Blockquote = styled.blockquote`
  font-size: 21px;
  line-height: 32px;
  margin: 24px 0 32px 0;
`

const Cite = styled.blockquote`
font-size: 16px;
line-height: 28px;
`
