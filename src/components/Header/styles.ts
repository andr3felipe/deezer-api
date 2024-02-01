import styled from "styled-components";

export const Container = styled.header`
  padding: 2rem;
  background-color: ${({ theme }) => theme.primary};

  > div {
    max-width: 1440px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.text};
    }
  }
`;
