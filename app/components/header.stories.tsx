import { StoryObj, Meta } from '@storybook/react';

import Header from './header';

export default {
  component: Header,
} as Meta<typeof Header>;

export const Default: StoryObj<typeof Header> = {};
