import StockBoard from '@/app/components/stock-board';
import SettingForm from '@/app/portfolio/setting-form';
import { fetchPortfolio } from '@/app/modules/portfolio/repository';

export default async function Portfolio() {
  const portfolio = fetchPortfolio();
  const symbols: string[] = portfolio ? JSON.parse(portfolio) : [];

  return (
    <>
      <h2 className="text-lg font-bold text-gray-900 sm:text-2xl pb-3">
        Portfolio
      </h2>
      <SettingForm symbols={symbols} />
      {symbols.map((symbol) => (
        <>
          {/* @ts-expect-error: https://github.com/vercel/next.js/issues/42292 */}
          <StockBoard symbol={symbol} />
        </>
      ))}
    </>
  );
}
