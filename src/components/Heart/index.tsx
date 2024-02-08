import { useContext } from "react";
import * as S from "./styles";
import { MusicContext } from "../../contexts/MusicContext";

export function Heart() {
  const { favorites } = useContext(MusicContext);

  return (
    <S.Favorites count={favorites.length}>
      <S.Heart />
    </S.Favorites>
  );
}
