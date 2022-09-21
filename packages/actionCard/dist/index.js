import React from 'react';
import Avatar from 'go-design-system-avatar';

function _ActionCard(props) {
  const {
    title,
    ctaText,
    key = new Date()
  } = props;
  return React.createElement("div", {
    key: `${key}`,
    className: styles['quick-link-container']
  }, React.createElement("div", {
    className: "d-flex"
  }, link.icon, React.createElement("div", {
    style: {
      marginLeft: 10
    }
  }, React.createElement("div", {
    className: styles['title']
  }, title), React.createElement("div", {
    className: styles['cta-text']
  }, ctaText))), React.createElement(Avatar, {
    max: 3,
    avatarGroupProps: {
      size: 'sm'
    },
    avatars: [{
      url: 'https://bit.ly/sage-adebayo',
      name: 'Segun Adebayo'
    }, {
      url: 'https://bit.ly/kent-c-dodds',
      name: 'Kent Dodds'
    }, {
      url: 'Prosper Otemuyiwa',
      name: 'https://bit.ly/prosper-baba'
    }, {
      url: 'https://bit.ly/code-beast',
      name: 'Christian Nwamba'
    }]
  }));
}

export default _ActionCard;
