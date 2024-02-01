import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  max-width: calc(400px - 1rem);
  width: 100%;
`;

export const Head = styled.div`
  position: relative;
  margin: 0 auto;
`;

export const AlignHeart = styled.button`
  position: absolute;
  top: 5px;
  left: 5px;
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

export const Body = styled.div``;

export const Image = styled.img`
  border-radius: 8px;
`;

export const Title = styled.h2``;

export const Description = styled.p`
  margin-top: 1rem;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
