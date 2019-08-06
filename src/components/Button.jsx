import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const buttonStyles = css`
  padding: 10px 20px;
  border-radius: var(--border-radius);
  cursor: pointer;
  border: none;
  color: #fff;
  font-size: 1rem;
  background: var(--primary-color);
  outline: none;
  text-decoration: none;
`;

export const Button = styled.button`
  ${buttonStyles}
`;

export const ButtonLink = styled(Link)`
  ${buttonStyles}
`;
