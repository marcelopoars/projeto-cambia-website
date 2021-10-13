import styled from "styled-components";
import { Heading } from "../shared";

export function Hero() {
  return (
    <HeroWrapper>
      <Heading
        fontSize={64}
        fontSizeMobile={48}
        fontWeight={800}
        textAlign="center"
        textAlignMobile="left"
      >
        Trocando experiências.
      </Heading>
    </HeroWrapper>
  );
}

const HeroWrapper = styled.section`
  width: 100%;
  height: 60vh;
  padding: 0 48px;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  background: url("icons/pink.svg") left center, url("icons/blue.svg") top right,
    url("icons/green.svg") 80%, url("icons/orange.svg") center;
  background-repeat: no-repeat;
  background-size: contain;

  @media (max-width: 676px) {
    padding: 0 24px;
    background-size: cover;
  }
`;
