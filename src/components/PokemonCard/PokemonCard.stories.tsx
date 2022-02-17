import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PokemonCard from './PokemonCard';

import sample from '../../__mocks__/data/bulbasaur.json';

export default {
  title: 'components/PokemonCard',
  component: PokemonCard,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof PokemonCard>;

const Template: ComponentStory<typeof PokemonCard> = (args) => (
  <PokemonCard {...args} />
);

export const Example = Template.bind({});
Example.args = {
  pokemon: sample,
};
