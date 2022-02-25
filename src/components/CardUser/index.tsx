import { UserProps } from "../../types/types";
import {
  BadgeContainer,
  ContainerCard,
  NumberContainer,
  AvatarContainer,
  InfoContainer,
} from "./styles";

function CardUser({ nome, cargo, telefone }: UserProps) {
  return (
    <ContainerCard>
      <AvatarContainer>
        <img src="https://picsum.photos/200" alt="Avatar" />
      </AvatarContainer>
      <InfoContainer>
        <h2>{nome}</h2>
        <h4>@{nome.toLowerCase().replace(" ", "")}</h4>
      </InfoContainer>
      <BadgeContainer>
        <h3>{cargo}</h3>
      </BadgeContainer>

      <NumberContainer>
        <h4>{telefone}</h4>
      </NumberContainer>
    </ContainerCard>
  );
}

export default CardUser;
