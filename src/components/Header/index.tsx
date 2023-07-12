import LogoImg from "../../assets/logo.svg";

import { Container, Content, LogoContainer } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <img src={LogoImg} alt="evermoney" />
          <span>EverMoney</span>
        </LogoContainer>
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
}
