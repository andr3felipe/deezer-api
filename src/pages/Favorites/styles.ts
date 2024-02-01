import styled from "styled-components";

export const Container = styled.main`
  max-width: 1440px;
  margin: 4rem auto;
  padding: 2rem;

  h1 {
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

export const Tracks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-flow: row wrap;
`;
