import React from 'react';
import tokens from 'go-design-system-theme';
import { Button } from '@chakra-ui/react';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _Button(props) {
  const {
    title
  } = props;
  return React.createElement(Button, _extends({
    leftIcon: React.createElement(EmailIcon, null),
    colorScheme: tokens.palette.primary,
    variant: "solid"
  }, props), title);
}

export default _Button;
