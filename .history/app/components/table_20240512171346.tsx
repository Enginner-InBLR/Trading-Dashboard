import { useState, useEffect } from 'react';

const Table = ({ tableData, columns }) => {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-gray-700 shadow-md">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          {columns.map((column) => (
            <th scope="col" className="px-6 py-3" key={column}>
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array.isArray(tableData) &&
          tableData.map((entry) => (
            <tr key={entry.id}>
              {columns.map((column) => (
                <td className="px-6 py-4" key={column}>
                  {entry[column]}
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;