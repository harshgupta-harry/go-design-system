'use strict';

import React from 'react';
import Avatar from 'go-design-system-avatar';
import styled from 'styled-components';
import { ChakraProvider } from '@chakra-ui/react';

function _ActionCard(props) {
  const { title, ctaText, key = new Date(), icon, avatars = [] } = props;

  const MainContainer = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  `;

  const SubContainer = styled.div`
    display: flex;
  `;

  const Title = styled.div`
    font-weight: 600;
    font-size: 14px;
  `;
  const CtaText = styled.div`
    color: #2684ff;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
  `;

  return (
    <ChakraProvider>
      <MainContainer key={`${key}`}>
        <SubContainer>
          {icon}
          <div style={{ marginLeft: 10 }}>
            <Title className={'title'}>{title}</Title>
            <CtaText className={'cta-text'}>{ctaText}</CtaText>
          </div>
        </SubContainer>
        <Avatar max={3} avatarGroupProps={{ size: 'sm' }} avatars={avatars} />
      </MainContainer>
    </ChakraProvider>
  );
}

export default _ActionCard;
