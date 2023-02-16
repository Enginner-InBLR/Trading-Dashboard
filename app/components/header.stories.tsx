import { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import Header from './header';

export default {
  component: Header,
} as ComponentMeta<typeof Header>;

export const Default: ComponentStoryObj<typeof Header> = {};
