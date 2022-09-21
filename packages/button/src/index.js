'use strict';

import React from 'react';
import tokens from 'go-design-system-theme';
import { Button } from '@chakra-ui/react';

function _Button(props) {
  const { title } = props;

  return (
    <Button colorScheme={tokens.palette.primary} variant="solid" {...props}>
      {title}
    </Button>
  );
}

export default _Button;
