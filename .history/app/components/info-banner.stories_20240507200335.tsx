import { StoryObj, Meta } from '@storybook/react';

import InfoBanner from './info-banner';

export default {
  component: InfoBanner,
} as Meta<typeof InfoBanner>;

export const Default: StoryObj<typeof InfoBanner> = {
  args: {
    title: 'Info Banner Title',
    description: 'Info Banner Description',
    url :'Infor Banner Urls',
  },
};
