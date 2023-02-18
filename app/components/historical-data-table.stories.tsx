import { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import HistoricalDataTable from './historical-data-table';

export default {
  component: HistoricalDataTable,
} as ComponentMeta<typeof HistoricalDataTable>;

export const Default: ComponentStoryObj<typeof HistoricalDataTable> = {
  args: {
    timestamps: [
      '2023/02/17 23:30',
      '2023/02/17 23:31',
      '2023/02/17 23:32',
      '2023/02/17 23:33',
      '2023/02/17 23:34',
    ],
    quotesResponse: {
      low: [4067.89, 4067.89, 4067.89, 4067.89, 4067.89],
      high: [4077.39, 4077.39, 4077.39, 4077.39, 4077.39],
      open: [4077.39, 4077.39, 4077.39, 4077.39, 4077.39],
      close: [4068.35, 4068.35, 4068.35, 4068.35, 4068.35],
      volume: [0, 0, 0, 0, 0],
    },
  },
};
