import { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import Button from './button';

export default {
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default: ComponentStoryObj<typeof Button> = {};
