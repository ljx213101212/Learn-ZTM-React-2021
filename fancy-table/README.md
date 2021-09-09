## Core target

Use 3rd library to implement the feature the project needs

## Scenario

Use react-table library to implement a sortable table.

### requirement

no need unsorted state

## Step

### Read Doc

find key word to try to add options and see if it helps

### Source Code Data Flow

Scan through the source code and find out the missing info which should be in document but it is not.

### solution

#### 1. Overwrite getSortByToggleProps onClick function

```js
 <th
    {...column.getHeaderProps(column.getSortByToggleProps())}
    onClick={() => {
        return column.isSortedDesc
        ? column.toggleSortBy(false, false)
        : column.toggleSortBy(true, false);
    }}
```

#### 2. Add disableSortRemove option to true

```js
const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  useTable({ columns, data, disableSortRemove: true }, useSortBy);
```

### What I have learnt?

If you are struggling with new library that project teams is using, use your free time and go through and play around with it. Do a POC if its necessary. Good luck and have fun!
