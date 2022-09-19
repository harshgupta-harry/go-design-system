'use strict';

import React from 'react';
import tokens from 'go-design-system-theme';
import { Avatar, AvatarGroup } from '@chakra-ui/avatar';

function _Avatar(props) {
  const {
    avatars = [],
    max = 2,
    avatarGroupProps = {},
    avatarProps = {},
  } = props;

  const renderAvatars = () => {
    return avatars.map((avatar, index) => {
      return (
        <Avatar
          name={avatar.name}
          src={avatar.url}
          bg={tokens.palette.primary}
          {...avatarProps}
        />
      );
    });
  };
  return (
    <AvatarGroup size="md" max={max} {...avatarGroupProps}>
      {renderAvatars()}
    </AvatarGroup>
  );
}

export default _Avatar;
