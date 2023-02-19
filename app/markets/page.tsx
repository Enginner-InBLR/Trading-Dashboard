import StockBoard from '@/app/components/stock-board';

const DISPLAY_SYMBOL_LIST = ['^GSPC', '^DJI', '^IXIC'];

export default function Markets() {
  return (
    <>
      <h2 className="text-lg font-bold text-gray-900 sm:text-2xl pb-3">
        Markets
      </h2>
      {DISPLAY_SYMBOL_LIST.map((symbol) => (
        <>
          {/* @ts-expect-error: https://github.com/vercel/next.js/issues/42292 */}
          <StockBoard key={symbol} symbol={symbol} />
        </>
      ))}
    </>
  );
}
