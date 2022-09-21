'use strict';

import React from 'react';
import { Avatar } from 'go-design-system-avatar';

function _ActionCard(props) {
  const { title, ctaText, key = new Date() } = props;

  return (
    <div key={`${key}`} className={styles['quick-link-container']}>
      <div className="d-flex">
        {link?.icon}
        <div style={{ marginLeft: 10 }}>
          <div className={styles['title']}>{title}</div>
          <div className={styles['cta-text']}>{ctaText}</div>
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
