import { StoryObj, Meta } from '@storybook/react';

import SettingForm from './setting-form';

export default {
  component: SettingForm,
} as Meta<typeof SettingForm>;

export const Default: StoryObj<typeof SettingForm> = {
  args: {
    symbols: ['AAPL', 'MSFT', 'TSLA'],
  },
};
