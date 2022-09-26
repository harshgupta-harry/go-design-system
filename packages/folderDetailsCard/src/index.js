'use strict';

import React from 'react';
import Avatar from 'go-design-system-avatar';
import './index.module.scss';
import styled from 'styled-components';

function _ActionCard(props) {
  const {
    title,
    last_opened_time,
    onClick,
    ctaText,
    key = new Date(),
    icon,
  } = props;

  return (
    <div
      onContextMenu={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      key={`${i}`}
      className={styles['folder-container']}
      onClick={onClick}
    >
      <div className={styles['folder-icon']}>
        {icons.folder({ height: '25px' })}
      </div>
      <div className={styles['elipses-icon']}>
        {icons.elipses({ height: '25px' })}
      </div>
      <div className={styles['time-stamp']}>{last_opened_time}</div>
      <div className={styles['folder-name']}>{title}</div>
      <div className={styles['copy-container']}>
        {icons.copy()}
        <span>Copy</span>
      </div>
    </div>
  );
}

export default _ActionCard;
