import { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import MenuCard from './menu-card';

export default {
  component: MenuCard,
} as ComponentMeta<typeof MenuCard>;

export const Default: ComponentStoryObj<typeof MenuCard> = {
  args: {
    title: 'Card Title',
    description: 'Card Description',
    supplement: 'Card Supplement',
    url: '/',
  },
};

export const Disabled: ComponentStoryObj<typeof MenuCard> = {
  args: {
    ...Default.args,
    disabled: true,
  },
};
