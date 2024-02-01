import { NavLink } from "react-router-dom";
import * as S from "./styles";

export function Header() {
  return (
    <S.Container>
      <div>
        <NavLink to="/">Home</NavLink>

        <NavLink to="/favorites">Favorites</NavLink>
      </div>
    </S.Container>
  );
}
