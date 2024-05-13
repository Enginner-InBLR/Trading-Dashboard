"use client"
import Head from 'next/head';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Button, ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import InfoBanner from '@/app/components/info-banner';
import Table  from '@/app/components/table';


export default function Nifty() {
  const [tableData,setTableData] = useState([]);
  const [numberOfEntries, setNumberOfEntries] = useState(5);
  const [inputValue, setInputValue] = useState(numberOfEntries);

  const [contractrendTableData, setContractrendTableData] = useState([]);
  const [numberOfContractrendEntries, setNumberOfContractrendEntries] = useState(5);
  const [inputValueContractrend, setInputValueContractrend] = useState(numberOfContractrendEntries);

  const [graphData, setGraphData] = useState([]);
  const [selectedData, setSelectedData] = useState('Close');
  

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleChangeContractrend = (event) => {
    setInputValueContractrend(event.target.value);
  };

  useEffect(() => {
    setNumberOfEntries(inputValue);
  }, [inputValue]);

  useEffect(() => {
    setNumberOfContractrendEntries(inputValueContractrend);
  }, [inputValueContractrend]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://nifty-signal-generation-tiqvavprfq-el.a.run.app/v1/nifty_momentum/${numberOfEntries}`);
      if (response.ok) {
        const data = await response.json();
        setTableData(data);
      }
    };

    fetchData();
  }, [numberOfEntries]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://nifty-signal-generation-tiqvavprfq-el.a.run.app/v1/nifty_contratrend/${numberOfContractrendEntries}`);
      if (response.ok) {
        const data = await response.json();
        setContractrendTableData(data);
      }
    };

    fetchData();
  }, [numberOfContractrendEntries]);
  return (
    <>
      <h2 className="text-lg font-bold text-gray-900 sm:text-2xl pb-3">
        Nifty
      </h2>
      <InfoBanner
        title="Currently only part of features are available, will be improved in the
          further relaese"
        description="Currently only Nifty PE Signals is Supported for more details visit the link below "
        url="https://www.niftyindices.com/reports/historical-data"
      />
      <form className="mt-4"> {/* form starts with a margin-top of 4 */}
        <h2 className="text-lg font-bold text-gray-900 sm:text-2xl pb-3"> {/* header for the form */}
          Add New Entry
        </h2>
        <div className="mb-4"> {/* input box for date */}
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
            Date (YYYY-MM-DD)
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" type="date" />
        </div>
        <div className="mb-4"> {/* input box for PE value */}
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="peValue">
            Closing Price
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="peValue" type="text" placeholder="Enter PE Value" />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"> {/* button to add PE entry */}
          Add PE Entry
        </button>
        <h2 className="text-lg font-bold text-gray-900 sm:text-2xl pb-3"> {/* header for the form */}
          Delete PE Entry
        </h2>
        <div className="mb-4"> {/* input box for date */}
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
            Date to Delete (YYYY-MM-DD)
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" type="date" />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"> {/* button to add PE entry */}
          Delete PE Entry
        </button>
      </form>
      <label for="entries" style={{ fontWeight: 'bold' }}>Select number of entries to display:</label>
      <input type="number" id="entries" value={inputValue} onChange={handleChange} />
      <Table tableData={tableData} columns={['id', 'Date', 'Close', '3EMA_Close', '6EMA_Close', '9EMA_Close', 'EMA_Actual_Momentum']} />
      <label for="entries" style={{ fontWeight: 'bold' }}>Select number of Momentum entries to display:</label>
      <input type="number" value={inputValueContractrend} onChange={handleChangeContractrend} />
      <LineChart
      width={500}
      height={300}
      data={graphData}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis dataKey="Date" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Line type="monotone" dataKey="Close" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
    </>
  );
}
