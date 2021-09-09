import React, { useState, useEffect } from 'react';
import { useTable, useSortBy } from 'react-table';

const NewBieTable = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data, disableSortRemove: true }, useSortBy);

  return (
    <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
      <thead>
        {headerGroups.map((headerGroup) => {
          console.log('[JX TEST] - headerGroup', headerGroup);
          return (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => {
                console.log('[JX TEST] - column', column);
                return (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    // onClick={() => {
                    //   return column.isSortedDesc
                    //     ? column.toggleSortBy(false, false)
                    //     : column.toggleSortBy(true, false);
                    // }}
                    style={{
                      borderBottom: 'solid 3px red',
                      background: 'aliceblue',
                      color: 'black',
                      fontWeight: 'bold',
                    }}
                  >
                    {column.render('Header')}
                  </th>
                );
              })}
            </tr>
          );
        })}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: '10px',
                      border: 'solid 1px gray',
                      background: 'papayawhip',
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default NewBieTable;
