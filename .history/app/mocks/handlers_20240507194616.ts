import { rest } from 'msw';

export const handlers = [
  rest.get(
    `${process.env.YAHOO_FINANCE_BASE_URI}/chart/:symbol`,
    (req, res, ctx) => res(ctx.status(200))
  ),
];
