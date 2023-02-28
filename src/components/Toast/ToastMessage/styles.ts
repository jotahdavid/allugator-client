import styled, { css, keyframes } from 'styled-components';

import { rem } from '@assets/styles/utils';
import type { ToastMessageType } from '@lib/toast';

const containerVariants = {
  default: css`
    background-color: #474747;
  `,
  sucess: css`
    background-color: #007E50;
  `,
  danger: css`
    background-color: #BB0202;
  `,
};

const messageIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const messageOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-100%);
  }
`;

type StyledContainerProps = {
  type: ToastMessageType;
  isLeaving: boolean;
};

export const Container = styled.div<StyledContainerProps>`
  padding: ${rem(16)} ${rem(22)};
  border-radius: 4px;
  font-size: ${rem(14)};
  font-weight: 700;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  cursor: pointer;
  box-shadow: 0px 16px 20px -16px rgba(0, 0, 0, 0.5);

  animation: ${messageIn} 300ms;

  ${({ type }) => containerVariants[type] || containerVariants.default}

  ${({ isLeaving }) => isLeaving && css`animation: ${messageOut} 200ms forwards;`}

  & + & {
    margin-top: ${rem(12)};
  }
`;
