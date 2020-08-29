import React from 'react';
import PropTypes from 'prop-types';

/**
 * Styles
 */
import { Container } from './styles';

function Flex({ flex, alg, jc, className,direction,children,style,onClick}) {
  return (
    <Container
      className={className}
      flex={flex}
      alg={alg}
      jc={jc}
      direction={direction}
      style={style}
      onClick={onClick}
    >
      {children}
    </Container>
  );
}

Flex.propTypes = {
  flex: PropTypes.string.isRequired,
  alg: PropTypes.string.isRequired,
  jc: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  children:PropTypes.node,
  style:PropTypes.object,
};

Flex.defaultProps = {
  flex: "0 0 auto",
  alg: "center",
  jc: "center",
  className: "",
  direction: "row"
};

export default Flex;
