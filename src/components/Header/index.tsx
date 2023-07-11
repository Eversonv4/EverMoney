import LogoImg from "../../assets/logo.svg";
import { Container, Content, LogoContainer } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <img src={LogoImg} alt="evermoney" />
          <span>EverMoney</span>
        </LogoContainer>
        <button type="button">Nova Transação</button>
      </Content>
    </Container>
  );
}
