import React from 'react';
import 'go-design-system-theme';
import { AvatarGroup, Avatar as Avatar$1 } from '@chakra-ui/avatar';

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

function Avatar(props) {
  const {
    avatars = [],
    max = 2,
    avatarGroupProps = {},
    avatarProps = {}
  } = props;

  const renderAvatars = () => {
    return avatars.map((avatar, index) => {
      return React.createElement(Avatar$1, _extends({
        name: avatar.name,
        src: avatar.url
      }, avatarProps));
    });
  };

  return React.createElement(AvatarGroup, _extends({
    size: "md",
    max: max
  }, avatarGroupProps), renderAvatars());
}

export { Avatar };
