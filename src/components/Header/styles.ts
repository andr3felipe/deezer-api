import styled, { css } from "styled-components";
import { HouseLine as house } from "@phosphor-icons/react";

interface FormProps {
  error: "true" | "false";
}

export const Container = styled.header`
  background-color: ${({ theme }) => theme.primary};
  border-bottom: 0.5px solid ${({ theme }) => theme.accent};

  > div {
    max-width: 1440px;
    margin: 0 auto;
    padding: 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.text};
    }
  }

  @media (max-width: 768px) {
    > div {
      padding: 1rem;
    }
  }
`;

export const Form = styled.form<FormProps>`
  p {
    margin-top: 0.5rem;
    text-align: center;
  }

  div {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    > input {
      padding: 0.5rem 2rem 0.5rem;
      height: 3rem;
      text-align: center;
      background-color: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.text};
      border-radius: 8px;
      border: none;

      &::placeholder {
        color: ${({ theme }) => theme.text};
      }

      ${({ error }) =>
        error === "true" &&
        css`
          border: 2px solid red;
          outline: none;
        `}
    }

    > button {
      position: absolute;
      right: 0.5rem;
      top: 50%;
      transform: translateY(-50%);
      border: none;
      background-color: transparent;
      cursor: pointer;

      > svg {
        color: ${({ theme }) => theme.text};
        &:hover {
          color: ${({ theme }) => theme.purple};
        }
      }
    }
  }
`;

export const House = styled(house)`
  &:hover {
    color: ${({ theme }) => theme.purple};
  }
`;
