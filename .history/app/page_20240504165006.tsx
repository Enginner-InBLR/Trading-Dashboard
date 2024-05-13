import MenuCard from '@/app/components/menu-card';

export default function Home() {
  return (
    <>
      <h2 className="text-lg font-bold text-gray-900 sm:text-2xl pb-3">Home</h2>
      <MenuCard
        title="Markets"
        description="Summary of NSE Indices"
        supplement="Currently Only Selected Part of NSE and BSE"
        url="/markets"
      />
    </>
  );
}
