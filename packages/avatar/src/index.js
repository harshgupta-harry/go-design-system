'use strict';

import React from 'react';
import tokens from 'go-design-system-theme';
import { Avatar, AvatarGroup } from '@chakra-ui/avatar';
export function Button(props) {
  const { children } = props;

  const buttonStyle = {
    color: tokens.palette.white,
    backgroundColor: tokens.palette.primary,
    padding: tokens.spacing.small,
  };

  return (
    <AvatarGroup size="md" max={2}>
      <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
      <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
      <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
      <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
      <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
    </AvatarGroup>
  );
}
