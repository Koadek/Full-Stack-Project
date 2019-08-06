import styled from 'styled-components';
import { mediaSizes } from '../globals';

export const Card = styled.div`
  overflow: hidden;
  background: #fff;
  box-shadow: 0px 2px 4px 0px #3e3d40de;
  margin: 20px;
  border-radius: var(--border-radius);
  text-align: center;
`;

export const CardTitle = styled.h1`
  margin: 0;
  padding: 20px;
  background: #404040;
  color: #fff;
  font-size: 1.6rem;
  @media (min-width: ${mediaSizes.sm}) {
    font-size: 2rem;
  }
`;

export const CardBody = styled.div`
  display: grid;
  margin: 20px;
`;
