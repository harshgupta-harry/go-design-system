import React from 'react';
import tokens from '@go-design-system/theme';

function Button(props) {
  const { children } = props;
  const buttonStyle = {
    color: tokens.palette.white,
    backgroundColor: tokens.palette.primary,
    padding: tokens.spacing.small,
  };
  return React.createElement(
    'button',
    {
      style: buttonStyle,
    },
    children
  );
}

export { Button };
