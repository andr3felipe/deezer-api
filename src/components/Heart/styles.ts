import styled, { css } from "styled-components";
import { Heart as heart } from "@phosphor-icons/react";

interface FavoritesProps {
  count?: number;
}

export const Favorites = styled.div<FavoritesProps>`
  position: relative;

  ${({ count }) =>
    count &&
    count > 0 &&
    css`
      &::after {
        content: "${count}";
        position: absolute;
        top: -15px;
        right: -10px;
        display: ${count ? "block" : "none"};
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.purple};
        color: #fff;
        font-size: 12px;
        line-height: 20px;
        text-align: center;
        font-weight: bold;
      }
    `}
`;

export const Heart = styled(heart)`
  &:hover {
    color: ${({ theme }) => theme.purple};
  }
`;
