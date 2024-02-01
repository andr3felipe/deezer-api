import { useContext } from "react";
import { Card } from "../../components/Card";
import * as S from "./styles";
import { MusicContext } from "../../contexts/MusicContext";

export function Home() {
  const { tracks } = useContext(MusicContext);

  return (
    <S.Container>
      <S.Tracks>
        {tracks?.data.map((track) => (
          <Card
            key={track.id}
            audio={track.preview}
            image={track.album.cover_big}
            title={track.title}
            duration={track.duration}
            artist={track.artist.name}
          />
        ))}
      </S.Tracks>
    </S.Container>
  );
}
