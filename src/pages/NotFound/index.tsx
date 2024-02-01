import { NavLink } from "react-router-dom";
import * as S from "./styles";
import { House } from "@phosphor-icons/react";

export function NotFound() {
  return (
    <S.Container>
      <div>
        <h1>404</h1>
        <p>Página não encontrada.</p>

        <NavLink to="/" aria-label="Página Inicial">
          <House size={50} />
          Voltar para a home
        </NavLink>
      </div>
    </S.Container>
  );
}
