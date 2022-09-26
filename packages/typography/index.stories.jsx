import React from 'react';
import Typography from './index';

export default {
  title: 'Packages/Typography',
  component: Typography,
};

const Template = (args) => <Typography {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: 'Hello World!',
};
