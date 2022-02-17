import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchForm from './SearchForm';
import { action } from '@storybook/addon-actions';
import { fireEvent, userEvent, within } from '@storybook/testing-library';

export default {
  title: 'components/SearchForm',
  component: SearchForm,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof SearchForm>;

const Template: ComponentStory<typeof SearchForm> = (args) => (
  <SearchForm {...args} onSubmit={action('SEARCH POKEMON')} />
);

export const StaticExample = Template.bind({});

export const InteractionExample = Template.bind({});
InteractionExample.play = async (ctx) => {
  const canvas = within(ctx.canvasElement);

  await userEvent.type(canvas.getByTestId('search-input'), 'pikachu', {
    delay: 100,
  });

  fireEvent.submit(canvas.getByTestId('search-form'), { delay: 100 });
};
