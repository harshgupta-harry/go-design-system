import React from 'react';
import 'go-design-system-theme';
import { AvatarGroup, Avatar as Avatar$1 } from '@chakra-ui/avatar';

function Avatar(props) {
  return React.createElement(AvatarGroup, {
    size: "md",
    max: 2
  }, React.createElement(Avatar$1, {
    name: "Ryan Florence",
    src: "https://bit.ly/ryan-florence"
  }), React.createElement(Avatar$1, {
    name: "Segun Adebayo",
    src: "https://bit.ly/sage-adebayo"
  }), React.createElement(Avatar$1, {
    name: "Kent Dodds",
    src: "https://bit.ly/kent-c-dodds"
  }), React.createElement(Avatar$1, {
    name: "Prosper Otemuyiwa",
    src: "https://bit.ly/prosper-baba"
  }), React.createElement(Avatar$1, {
    name: "Christian Nwamba",
    src: "https://bit.ly/code-beast"
  }));
}

export { Avatar };
