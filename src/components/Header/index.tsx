import { NavLink } from "react-router-dom";
import * as S from "./styles";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { MusicContext } from "../../contexts/MusicContext";
import { FormEvent, useContext } from "react";

export function Header() {
  const { handleSearch, search } = useContext(MusicContext);

  return (
    <S.Container>
      <div>
        <NavLink to="/" aria-label="Página Inicial">
          <S.House size={32} />
        </NavLink>

        <S.Form>
          <input
            type="text"
            placeholder="Buscar"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <button type="submit">
            <MagnifyingGlass size={32} />
          </button>
        </S.Form>

        <NavLink to="/favorites" aria-label="Página de favoritos">
          <S.Favorites>
            <S.Heart size={32} />
            <S.HeartFilled size={32} weight="fill" />
          </S.Favorites>
        </NavLink>
      </div>
    </S.Container>
  );
}
