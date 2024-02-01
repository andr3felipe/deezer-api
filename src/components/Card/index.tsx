import { Heart } from "@phosphor-icons/react";
import * as S from "./styles";
import { useContext } from "react";
import { MusicContext } from "../../contexts/MusicContext";

interface CardProps {
  id: number;
  image: string;
  title: string;
  audio: string;
  duration: number;
  artist: string;
  isFavorite: boolean;
}

export function Card({
  id,
  image,
  title,
  audio,
  duration,
  artist,
  isFavorite,
}: CardProps) {
  const durationFormat = String(parseFloat((duration / 60).toFixed(2)))
    .split(".")
    .join(":");

  const { setLocalStorage } = useContext(MusicContext);

  return (
    <S.Container>
      <S.Head>
        <S.Image src={image} alt={title} width={350} height={350} />
        <S.AlignHeart>
          {isFavorite ? (
            <Heart
              size={40}
              aria-label="Remover dos favoritos"
              weight="fill"
              color="red"
              onClick={() =>
                setLocalStorage({
                  track: {
                    id,
                    title,
                    duration,
                    preview: audio,
                    album: { cover_big: image },
                    artist: { name: artist },
                  },
                  action: "remove",
                })
              }
            />
          ) : (
            <Heart
              size={40}
              aria-label="Adicionar aos favoritos"
              color="red"
              onClick={() =>
                setLocalStorage({
                  track: {
                    id,
                    title,
                    duration,
                    preview: audio,
                    album: { cover_big: image },
                    artist: { name: artist },
                  },
                  action: "add",
                })
              }
            />
          )}
        </S.AlignHeart>
      </S.Head>

      <S.Body>
        <S.Title>{title}</S.Title>
        <S.Description>
          {artist} {durationFormat}
        </S.Description>
      </S.Body>

      <S.Footer>
        <audio controls>
          <source src={audio} type="audio/mp3" />
          Seu navegador não tem suporte.
        </audio>
      </S.Footer>
    </S.Container>
  );
}
