import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ErrorMessage from './ErrorMessage';

export default {
  title: 'components/ErrorMessage',
  component: ErrorMessage,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof ErrorMessage>;

const Template: ComponentStory<typeof ErrorMessage> = (args) => (
  <ErrorMessage {...args} />
);

export const Example = Template.bind({});
Example.args = {
  error: new Error('sample error'),
};
