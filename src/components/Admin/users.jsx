import React, { useEffect, useState } from "react";
import { useMemo } from "react";
import { Column, useTable } from "react-table";
import {CiCircleCheck} from "react-icons/ci";
import {CiCircleRemove} from "react-icons/ci";

export default function Table({ users }) {

  const cols = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Email",
      accessor: "email"
    },
    {
      Header: "Visible",
      accessor: "visible",
      Cell: ({value}) => value === false ? <div ><CiCircleRemove  /></div> : <div ><CiCircleCheck  /></div>
    },
  ];

  const data = useMemo(() => users, [users]);
  const columns = useMemo(() => cols, [cols]);

  const tableInstance = useTable({ columns, data: users });

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
