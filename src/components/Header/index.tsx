import styled from "styled-components";
import { Logo } from "../Logo";
import { Container, Section } from "../shared";

export function Header() {
  return (
    <Section as="header" paddingY={32}>
      <Container maxWidth={1344}>
        <BoxLogo>
          <Logo />
        </BoxLogo>
      </Container>
    </Section>
  );
}

const BoxLogo = styled.div`
  max-width: 184px;

  @media (max-width: 676px) {
    max-width: 134px;
  }
`;
