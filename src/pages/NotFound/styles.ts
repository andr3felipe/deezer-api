import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  h1 {
    margin-bottom: 0.5rem;
    font-size: 15rem;
  }

  p {
    margin-bottom: 2rem;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 1.5rem;

    color: ${({ theme }) => theme.text};
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.purple};
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 12rem;
    }
  }
`;
