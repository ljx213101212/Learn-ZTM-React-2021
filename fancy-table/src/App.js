import React, { useState, useEffect } from 'react';
import './App.css';
import NewBieTable from './component/NewBieTable';

function App() {
  const data = React.useMemo(
    () => [
      {
        col1: 'Apple',
        col2: 'AA',
      },
      {
        col1: '-',
        col2: 'BB',
      },
      {
        col1: 'zoo',
        col2: 'CC',
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Column 1',
        accessor: 'col1', // accessor is the "key" in the data
        toggleSortBy: (desc, multi) => {
          console.log('[JX TEST] - getSortedBy');
        },
        sortDescFirst: true,
      },
      {
        Header: 'Column 2',
        accessor: 'col2',
      },
    ],
    []
  );

  return (
    <div className="App">
      Hello table!
      <NewBieTable columns={columns} data={data}></NewBieTable>
    </div>
  );
}

export default App;
