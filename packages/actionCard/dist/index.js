import React from 'react';
import Avatar from 'go-design-system-avatar';
import styled from 'styled-components';
import { ChakraProvider } from '@chakra-ui/react';

function _ActionCard(props) {
  const {
    title,
    ctaText,
    key = new Date(),
    icon,
    avatars = []
  } = props;
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
  return React.createElement(ChakraProvider, null, React.createElement(MainContainer, {
    key: `${key}`
  }, React.createElement(SubContainer, null, icon, React.createElement("div", {
    style: {
      marginLeft: 10
    }
  }, React.createElement(Title, {
    className: 'title'
  }, title), React.createElement(CtaText, {
    className: 'cta-text'
  }, ctaText))), React.createElement(Avatar, {
    max: 3,
    avatarGroupProps: {
      size: 'sm'
    },
    avatars: avatars
  })));
}

export default _ActionCard;
