import { useContext } from "react";
import { Card } from "../../components/Card";
import * as S from "./styles";
import { MusicContext } from "../../contexts/MusicContext";

export function Home() {
  const { tracks, favorites } = useContext(MusicContext);

  return (
    <S.Container>
      <h1>Início</h1>
      <S.Tracks>
        {tracks ? (
          tracks?.data.map((track) => {
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
          <p>Carregando...</p>
        )}
      </S.Tracks>
    </S.Container>
  );
}
