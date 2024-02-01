import { useContext } from "react";
import * as S from "./styles";
import { MusicContext } from "../../contexts/MusicContext";
import { Card } from "../../components/Card";

export function Favorites() {
  const { favorites } = useContext(MusicContext);
  return (
    <S.Container>
      <h1>Favoritos</h1>
      <S.Tracks>
        {favorites.length > 0 ? (
          favorites?.map((track) => {
            const isFavorite = favorites?.some((t) => t.id === track.id);

            return (
              <Card
                key={track.id}
                id={track.id}
                image={track.album.cover_big}
                title={track.title}
                audio={track.preview}
                duration={track.duration}
                artist={track.artist.name}
                isFavorite={isFavorite}
              />
            );
          })
        ) : (
          <h2>Você não tem favoritos.</h2>
        )}
      </S.Tracks>
    </S.Container>
  );
}
