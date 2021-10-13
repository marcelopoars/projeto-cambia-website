import Image from "next/image";
import styled from "styled-components";
import { Logo } from "../Logo";
import { Container, GridContainer, Section } from "../shared";

export function Footer() {
  return (
    <Section bgColor="yellow-500" as="footer" paddingY={96}>
      <Container maxWidth={1344}>
        <BoxLogo>
          <Logo />
        </BoxLogo>

        <GridContainer gap={48} marginBottom={80}>
          <BoxText>
            <p>CNPJ 36.697.016/0001-42</p>
            <p>Porto Alegre, Rio Grande do Sul</p>
          </BoxText>

          <BoxText>
            <h3>Fale com a gente</h3>
            <p>projetocambia@gmail.com</p>
          </BoxText>

          <BoxText>
            <h3>Nos siga nas redes sociais</h3>

            <Social>
              <ul>
                <li>
                  <a href="#">
                    <Image
                      width={23}
                      height={23}
                      src="/images/icon-instagram.svg"
                      alt="Logo Projeto Cambia"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image
                      width={23}
                      height={23}
                      src="/images/icon-linkedin.svg"
                      alt="Logo Projeto Cambia"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image
                      width={23}
                      height={23}
                      src="/images/icon-facebook.svg"
                      alt="Logo Projeto Cambia"
                    />
                  </a>
                </li>
              </ul>
            </Social>
          </BoxText>
        </GridContainer>

        <Copy>
          © {new Date().getFullYear()} Projeto Cambia. Todos os direitos
          reservados.
        </Copy>
      </Container>
    </Section>
  );
}

const BoxLogo = styled.div`
  max-width: 168px;
  margin-bottom: 64px;

  @media (max-width: 676px) {
    max-width: 150px;
    margin: 0 auto 24px;
  }
`;

const BoxText = styled.div`
  @media (max-width: 676px) {
    text-align: center;
  }
`;

const Copy = styled.p`
  text-align: center;

  @media (max-width: 676px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const Social = styled.aside`
  margin-top: 16px;
  ul {
    display: flex;

    li + li {
      margin-left: 24px;
    }
  }

  @media (max-width: 676px) {
    ul {
      justify-content: center;
    }
  }
`;
