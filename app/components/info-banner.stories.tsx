import { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import InfoBanner from './info-banner';

export default {
  component: InfoBanner,
} as ComponentMeta<typeof InfoBanner>;

export const Default: ComponentStoryObj<typeof InfoBanner> = {
  args: {
    title: 'Info Banner Title',
    description: 'Info Banner Description',
  },
};
