import React from 'react';
import tokens from 'go-design-system-theme';
import { AvatarGroup, Avatar } from '@chakra-ui/avatar';

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

function _Avatar(props) {
  const {
    avatars = [],
    max = 2,
    avatarGroupProps = {},
    avatarProps = {}
  } = props;

  const renderAvatars = () => {
    return avatars.map((avatar, index) => {
      return React.createElement(Avatar, _extends({
        name: avatar.name,
        src: avatar.url,
        bg: tokens.palette.primary
      }, avatarProps));
    });
  };

  return React.createElement(AvatarGroup, _extends({
    size: "md",
    max: max
  }, avatarGroupProps), renderAvatars());
}

export default _Avatar;
