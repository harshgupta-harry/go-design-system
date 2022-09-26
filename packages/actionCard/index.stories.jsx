import React from 'react';
import _ActionCard from './src';

export default {
  title: 'Packages/ActionCard',
  component: _ActionCard,
};

const Template = (args) => <_ActionCard {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  title: 'Button',
  ctaText: 'asd',
  icon: <img src="https://bit.ly/sage-adebayo" height={20} width={20} />,
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
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
