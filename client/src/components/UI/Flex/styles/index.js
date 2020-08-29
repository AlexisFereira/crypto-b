import styled from '@emotion/styled';

// background: ${props => props.theme.background.box};
export const Container = styled.div`
  width: 100%;
  height: auto;
  display:flex;
  flex-flow: ${props => props.direction} wrap;
  justify-content: ${props => props.jc};
  align-items: ${props => props.alg};
  flex: ${props => props.flex};
  will-change:transform;
`;
