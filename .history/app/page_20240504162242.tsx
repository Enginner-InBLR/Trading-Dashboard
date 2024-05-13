import MenuCard from '@/app/components/menu-card';

export default function Home() {
  return (
    <>
      <h2 className="text-lg font-bold text-gray-900 sm:text-2xl pb-3">Home</h2>
      <MenuCard
        title="Markets"
        description="summary of world indices"
        supplement="currently only part of US indices are supported"
        url="/markets"
      />
      <MenuCard
        title="Portfolio"
        description="you can manage your portfolio here, and see the performance of your portfolio"
        supplement="currently only part of features are available, will be improved in the future"
        url="/portfolio"
        disabled
      />
      <MenuCard
        title="Prediction"
        description="you can predict the future price of a stock here"
        supplement="currently under development and not available"
        disabled
      />
    </>
  );
}
