"use client"
import { useState, useEffect } from 'react';
import InfoBanner from '@/app/components/info-banner';


export default function Nifty() {
  const [tableData, setTableData] = useState([]);
  const [numberOfEntries, setNumberOfEntries] = useState(5);
  const [inputValue, setInputValue] = useState(numberOfEntries);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
useEffect(() => {
    setNumberOfEntries(inputValue);
  }, [inputValue]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://nifty-signal-generation-tiqvavprfq-el.a.run.app/v1/nifty_momentum?limit=${numberOfEntries}`);
      if(response.ok){
      const data = await response.json();
      setTableData(data);
      }
    };

    fetchData();
  }, [numberOfEntries]);
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
      <input type="number" value={inputValue} onChange={handleChange} />
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Close</th>
            <th>3EMA_Close</th>
            <th>6EMA_Close</th>
            <th>9EMA_Close</th>
            <th>EMA_Actual_Momentum</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(tableData) && tableData.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.Date}</td>
              <td>{entry.Close}</td>
              <td>{entry['3EMA_Close']}</td>
              <td>{entry['6EMA_Close']}</td>
              <td>{entry['9EMA_Close']}</td>
              <td>{entry['EMA_Actual_Momentum']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
