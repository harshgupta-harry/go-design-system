import React from 'react';
import 'go-design-system-avatar';
import 'styled-components';

function _ActionCard(props) {
  const {
    title,
    last_opened_time,
    onClick,
    ctaText,
    key = new Date(),
    icon
  } = props;
  return React.createElement("div", {
    onContextMenu: e => {
      e.preventDefault();
      e.stopPropagation();
    },
    key: `${i}`,
    className: styles['folder-container'],
    onClick: onClick
  }, React.createElement("div", {
    className: styles['folder-icon']
  }, icons.folder({
    height: '25px'
  })), React.createElement("div", {
    className: styles['elipses-icon']
  }, icons.elipses({
    height: '25px'
  })), React.createElement("div", {
    className: styles['time-stamp']
  }, last_opened_time), React.createElement("div", {
    className: styles['folder-name']
  }, title), React.createElement("div", {
    className: styles['copy-container']
  }, icons.copy(), React.createElement("span", null, "Copy")));
}

export default _ActionCard;
