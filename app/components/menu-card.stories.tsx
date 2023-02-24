import { StoryObj, Meta } from '@storybook/react';

import MenuCard from './menu-card';

export default {
  component: MenuCard,
} as Meta<typeof MenuCard>;

export const Default: StoryObj<typeof MenuCard> = {
  args: {
    title: 'Card Title',
    description: 'Card Description',
    supplement: 'Card Supplement',
    url: '/',
  },
};

export const Disabled: StoryObj<typeof MenuCard> = {
  args: {
    ...Default.args,
    disabled: true,
  },
};
