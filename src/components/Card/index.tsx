import * as S from "./styles";

interface CardProps {
  image: string;
  title: string;
  audio: string;
  duration: number;
  artist: string;
}

export function Card({ image, title, audio, duration, artist }: CardProps) {
  const durationFormat = String(parseFloat((duration / 60).toFixed(2)))
    .split(".")
    .join(":");

  return (
    <S.Container>
      <S.Head>
        <S.Image src={image} alt={title} width={350} height={350} />
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
