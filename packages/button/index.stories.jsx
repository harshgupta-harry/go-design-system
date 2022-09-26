import React from 'react';
import _Button from './src';

export default {
  title: 'Packages/Button',
  component: _Button,
};

const Template = (args) => <_Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: 'Button',
};
