import React, { useEffect, useState } from "react";
import { useMemo } from "react";
import { Column, useTable } from "react-table";


export default function Table({ products }) {

  const cols = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "Model",
      accessor: "model",
    },
    {
      Header: "Price",
      accessor: "price"
    },
    {
      Header: "Stock",
      accessor: "stock",
    },
  ];

  const data = products?.map (e => e.data)
  const columns = useMemo(() => cols, [cols]);

  const tableInstance = useTable({ columns, data});

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;


  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
