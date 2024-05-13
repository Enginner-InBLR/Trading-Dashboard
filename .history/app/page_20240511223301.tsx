import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import MenuCard from '@/app/components/menu-card';

export default function Home() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <h2 className={`text-lg font-bold text-gray-${theme === 'light' ? '900' : '100'} sm:text-2xl pb-3`}>Home</h2>
      <button onClick={toggleTheme} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Toggle theme
      </button>
      <MenuCard
        title="Nifty"
        description="Summary of NSE Indices"
        supplement="Currently Only Selected Part of NSE and BSE"
        url="/nifty"
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
     