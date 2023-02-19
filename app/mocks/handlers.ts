import { historicalDataMock } from '@/app/modules/yahoo-finance/fixture';
import { rest } from 'msw';

export const handlers = [
  rest.get(
    `${process.env.YAHOO_FINANCE_BASE_URI}/chart/:symbol`,
    (req, res, ctx) => res(ctx.status(200), ctx.json(historicalDataMock))
  ),
];
