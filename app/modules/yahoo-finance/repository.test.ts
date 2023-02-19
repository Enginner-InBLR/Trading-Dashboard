import { rest } from 'msw';
import { historicalDataMock } from '@/app/modules/yahoo-finance/fixture';
import { fetchHistoricalData } from '@/app/modules/yahoo-finance/repository';
import { server } from '@/app/mocks/server';

describe('fetchHistoricalData', () => {
  it('fetch success pattern for fetchHistoricalData', async () => {
    const historicalDataResponse = await fetchHistoricalData('^GSPC');

    expect(historicalDataResponse).toStrictEqual(historicalDataMock);
  });

  it('fetch fail pattern for fetchHistoricalData', async () => {
    server.use(
      rest.get(
        `${process.env.YAHOO_FINANCE_BASE_URI}/chart/:symbol`,
        (req, res, ctx) =>
          res(
            ctx.status(404),
            ctx.json({
              message: 'Not Found',
            })
          )
      )
    );

    await expect(fetchHistoricalData('^GSPC')).rejects.toThrow(
      'Failed to fetch data in server'
    );
  });
});
