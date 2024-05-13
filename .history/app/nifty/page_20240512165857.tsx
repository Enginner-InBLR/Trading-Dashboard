"use client"
import { useState, useEffect } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
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
      const response = await fetch(`https://nifty-signal-generation-tiqvavprfq-el.a.run.app/v1/nifty_momentum/${numberOfEntries}`);
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
      <p>Select number of entries to display:</p>
      <input type="number" value={inputValue} onChange={handleChange} />
      <Table>
        <TableHeader>
          <TableColumn>Date</TableColumn>
          <TableColumn>Close</TableColumn>
          <TableColumn>3EMA_Close</TableColumn>
          <TableColumn>6EMA_Close</TableColumn>
          <TableColumn>9EMA_Close</TableColumn>
          <TableColumn>EMA_Actual_Momentum</TableColumn>
        </TableHeader>
        <TableBody>
          {Array.isArray(tableData) && tableData.map((entry) => (
            <TableRow key={entry.id}>
              <TableCell>{entry.Date}</TableCell>
              <TableCell>{entry.Close}</TableCell><TableCell>{entry['3EMA_Close']}</TableCell>
              <TableCell>{entry['6EMA_Close']}</TableCell>
              <TableCell>{entry['9EMA_Close']}</TableCell>
              <TableCell>{entry['EMA_Actual_Momentum']}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
