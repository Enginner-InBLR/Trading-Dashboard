import MenuCard from '@/app/components/menu-card';

export default function Home() {
  return (
    <>
      <h2 className="text-lg font-bold text-gray-900 sm:text-2xl pb-3">Home</h2>
      <MenuCard
        title="Nifty"
        description="Summary of NSE Indices"
        supplement="Currently Only Selected Part of NSE and BSE"
        url="/nasdaq"
        disabled
      />
      <MenuCard
        title="S&P"
        description="Summary of NSE Indices"
        supplement="Currently Only Selected Part of NSE and BSE"
        url="/s&p"
        disabled
      />
      <MenuCard
        title="Gold"
        description="Summary of NSE Indices"
        supplement="Currently Only Selected Part of NSE and BSE"
        url="/gold"
        disabled
      />
      <MenuCard
        title="Nasdaq"
        description="Summary of NSE Indices"
        supplement="Currently Only Selected Part of NSE and BSE"
        url="/nasdaq"
        disabled
      />
      <MenuCard
        title="Golden Dragon"
        description="Summary of NSE Indices"
        supplement="Currently Only Selected Part of NSE and BSE"
        url="/golden_dragon"
        disabled
      />
      <MenuCard
        title="Contratrend Signals"
        description="Summary of NSE Indices"
        supplement="Currently Only Selected Part of NSE and BSE"
        url="/contratrend_signals"
        disabled
      />
    </>
  );
}
