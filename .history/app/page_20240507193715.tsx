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
      />
      <MenuCard
        title="S&P"
        description="Summary of NSE Indices"
        supplement="Currently Only Selected Part of NSE and BSE"
        url="/s&p"
      />
      <MenuCard
        title="Gold"
        description="Summary of NSE Indices"
        supplement="Currently Only Selected Part of NSE and BSE"
        url="/gold"
      />
      <MenuCard
        title="Nasdaq"
        description="Summary of NSE Indices"
        supplement="Currently Only Selected Part of NSE and BSE"
        url="/nasdaq"
      />
      <MenuCard
        title="Golden Dragon"
        description="Summary of NSE Indices"
        supplement="Currently Only Selected Part of NSE and BSE"
        url="/golden_dragon"
      />
      <MenuCard
        title="Contratrend Signals"
        description="Summary of NSE Indices"
        supplement="Currently Only Selected Part of NSE and BSE"
        url="/contratrend_signals"
      />
    </>
  );
}
