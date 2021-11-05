import React, { useState, useEffect } from 'react';
import { useTable, useSortBy } from 'react-table';

const NewBieTable = ({ columns, data }) => {
  const initialState = React.useMemo(() => {
    return {
      sortBy: [
        {
          id: 'col1',
        },
      ],
    };
  }, []);

  const stateReducer = (newState, action, prevState) => {
    console.log('[JX TEST] - stateReducer', newState, action, prevState);
    //console.log('[JX TEST] - stateReducer', newState.sortBy[0]);
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, toggleSortBy } =
    useTable({ columns, data, initialState, stateReducer }, useSortBy);

  return (
    <>
      <button
        onClick={() => {
          if (headerGroups[0].headers[1].isSortedDesc) {
            toggleSortBy('col1', false, false);
          }
        }}
      >
        sort by col1
      </button>
      <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
        <thead>
          {headerGroups.map((headerGroup) => {
            console.log('[JX TEST] - headerGroupProps', headerGroup.getHeaderGroupProps());
            return (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => {
                  console.log('[JX TEST] - column', column);
                  console.log(
                    '[JX TEST] - getSortByToggleProps',
                    column.getHeaderProps(column.getSortByToggleProps())
                  );
                  return (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      // onClick={(e) => {
                      //   e.persist();
                      //   if (column.id !== 'col1' && column.isSortedDesc) {
                      //     console.log('[JX TEST] - target requirement ', column);
                      //     toggleSortBy('col1', false, false);
                      //     return;
                      //   }
                      //   column.toggleSortBy(undefined, false);
                      // }}
                      style={{
                        borderBottom: 'solid 3px red',
                        background: 'aliceblue',
                        color: 'black',
                        fontWeight: 'bold',
                      }}
                    >
                      {column.render('Header')}
                      {/* <span
                        onClick={(e) => {
                          const sortedCol = headerGroup.headers.find((col) => col.isSorted);
                          console.log('[JX TEST] - sortedCol', sortedCol.id);
                          if (column.id !== 'col1' && column.isSortedDesc) {
                            console.log('[JX TEST] - toggleSortBy col1', headerGroup.headers);
                            setTimeout(() => toggleSortBy('col1', false, false));
                            return;
                          }
                        }}
                      >
                        点我
                      </span> */}
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
    </>
  );
};

export default NewBieTable;
