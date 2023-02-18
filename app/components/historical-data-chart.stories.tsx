import { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import HistoricalDataChart from './historical-data-chart';

export default {
  component: HistoricalDataChart,
} as ComponentMeta<typeof HistoricalDataChart>;

export const Default: ComponentStoryObj<typeof HistoricalDataChart> = {
  render: () => (
    <div className="w-[600px]">
      <HistoricalDataChart
        timestamps={[
          '2023/02/17 23:30',
          '2023/02/17 23:31',
          '2023/02/17 23:32',
          '2023/02/17 23:33',
          '2023/02/17 23:34',
        ]}
        quotesResponse={{
          low: [4067.89, 4057.89, 4047.89, 4057.89, 4067.89],
          high: [4067.39, 4067.39, 4047.39, 4157.39, 4167.39],
          open: [4067.39, 4067.39, 4047.39, 4057.39, 4067.39],
          close: [4058.35, 4048.35, 4038.35, 4148.35, 4158.35],
          volume: [0, 0, 0, 0, 0],
        }}
      />
    </div>
  ),
};
