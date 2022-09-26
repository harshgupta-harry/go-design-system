import React from 'react';
import _Avatar from './src';

export default {
  title: 'Packages/Avatar',
  component: _Avatar,
};

const Template = (args) => <_Avatar {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  avatars: [
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
  ],
  max: 2,
  avatarGroupProps: {},
  avatarProps: {},
};
