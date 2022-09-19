import React from 'react';
import 'go-design-system-theme';
import { AvatarGroup, AvatarNPM } from '@chakra-ui/avatar';

function Avatar(props) {
  return React.createElement(AvatarGroup, {
    size: "md",
    max: 2
  }, React.createElement(AvatarNPM, {
    name: "Ryan Florence",
    src: "https://bit.ly/ryan-florence"
  }), React.createElement(AvatarNPM, {
    name: "Segun Adebayo",
    src: "https://bit.ly/sage-adebayo"
  }), React.createElement(AvatarNPM, {
    name: "Kent Dodds",
    src: "https://bit.ly/kent-c-dodds"
  }), React.createElement(AvatarNPM, {
    name: "Prosper Otemuyiwa",
    src: "https://bit.ly/prosper-baba"
  }), React.createElement(AvatarNPM, {
    name: "Christian Nwamba",
    src: "https://bit.ly/code-beast"
  }));
}

export { Avatar };
