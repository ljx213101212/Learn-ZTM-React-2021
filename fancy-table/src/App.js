import React, { useState, useEffect } from 'react';
import './App.css';
import NewBieSelect from './component/NewBieSelect';
import NewBieTable from './component/NewBieTable';

function App() {
  const data = React.useMemo(
    () => [
      {
        col1: 'Apple',
        col2: 'ZZ',
        col3: 250,
      },
      {
        col1: '-',
        col2: 'AA',
        col3: 300,
      },
      {
        col1: 'Zoo',
        col2: '-',
        col3: 200,
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: ({ toggleSortBy, rows, columns }) => {
          // console.log('[JX TEST] - Header', toggleSortBy, rows, columns);
          // const firstColumn = columns.find((col) => col.id === 'col1');
          // const sortedColumn = columns.find((col) => col.isSorted === true);
          // if (!sortedColumn) {
          //   console.log('[JX TEST] - toggleSortBy');
          //   setTimeout(() => firstColumn.toggleSortBy(false, false));
          // }
          return 'Column 1';
        },
        accessor: 'col1', // accessor is the "key" in the data
        sortDescFirst: true,
        getHeaderProps: (props) => {
          console.log('[JX TEST] - getHeaderProps', props);
        },
      },
      {
        Header: ({ toggleSortBy }) => {
          return 'Column 2';
        },
        accessor: 'col2',
      },
      {
        Header: 'Column 3',
        accessor: 'col3',
      },
    ],
    []
  );

  return (
    <div className="App">
      {/* <NewBieTable columns={columns} data={data}></NewBieTable> */}
      <NewBieSelect></NewBieSelect>
    </div>
  );
}

export default App;
