import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocus: boolean;
  isFill: boolean;
  hasError: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${({ hasError }) =>
    hasError &&
    css`
      color: #c53030;
      border-color: #c53030;
    `};

  ${({ isFocus }) =>
    isFocus &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `};

  ${({ isFill }) =>
    isFill &&
    css`
      color: #ff9000;
    `};

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;

    &:placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
