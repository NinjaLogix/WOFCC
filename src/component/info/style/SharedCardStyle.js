import styled from 'styled-components';
import { Card } from '@material-ui/core';

const StyledCard = styled(Card)`
  min-width: 100mm;
  max-width: 160mm;

  margin: 2mm 0;
`;

const CardRow = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

const FullStyledCard = styled(Card)`
  width: 93%;
  margin: 2% 0 0 0;
`;

export { StyledCard, CardRow, FullStyledCard };
