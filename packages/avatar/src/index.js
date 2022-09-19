'use strict';

import React from 'react';
import tokens from 'go-design-system-theme';
import { Avatar as AvatarNPM, AvatarGroup } from '@chakra-ui/avatar';
export function Avatar(props) {
  return (
    <AvatarGroup size="md" max={2}>
      <AvatarNPM name="Ryan Florence" src="https://bit.ly/ryan-florence" />
      <AvatarNPM name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
      <AvatarNPM name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
      <AvatarNPM name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
      <AvatarNPM name="Christian Nwamba" src="https://bit.ly/code-beast" />
    </AvatarGroup>
  );
}
