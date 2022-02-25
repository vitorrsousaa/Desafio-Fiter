import { useEffect } from "react";
import { useUsers } from "../../context/UsersContext";
import CardUser from "../CardUser";
import { ContainerDashboard } from "./styles";

function Container() {
  const { users } = useUsers();

  return (
    <ContainerDashboard>
      {users.map((user) => (
        <CardUser
          nome={user.nome}
          key={user.nome}
          cargo={user.cargo}
          telefone={user.telefone}
          foto={user.foto}
        />
      ))}
    </ContainerDashboard>
  );
}

export default Container;
