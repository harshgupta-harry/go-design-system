'use strict';

import React from 'react';
import Avatar from 'go-design-system-avatar';
import './index.module.scss';

function _ActionCard(props) {
  const { title, ctaText, key = new Date(), icon } = props;

  return (
    <div key={`${key}`} className={'go-design-system-action-card-container'}>
      <div className="d-flex">
        {icon}
        <div style={{ marginLeft: 10 }}>
          <div className={'title'}>{title}</div>
          <div className={'cta-text'}>{ctaText}</div>
        </div>
      </div>
      <Avatar
        max={3}
        avatarGroupProps={{ size: 'sm' }}
        avatars={[
          {
            url: 'https://bit.ly/sage-adebayo',
            name: 'Segun Adebayo',
          },
          {
            url: 'https://bit.ly/kent-c-dodds',
            name: 'Kent Dodds',
          },
          {
            url: 'Prosper Otemuyiwa',
            name: 'https://bit.ly/prosper-baba',
          },
          {
            url: 'https://bit.ly/code-beast',
            name: 'Christian Nwamba',
          },
        ]}
      />
    </div>
  );
}

export default _ActionCard;
