import * as S from "./styles";

interface CardProps {
  image: string;
  title: string;
  description: string;
  audio: string;
}

export function Card({ image, title, description, audio }: CardProps) {
  return (
    <S.Container>
      <S.Head>
        <S.Image src={image} alt={title} width={350} height={350} />
      </S.Head>

      <S.Body>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
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
