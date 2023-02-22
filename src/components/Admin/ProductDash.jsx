import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSortBy, useTable, usePagination, useFilters } from 'react-table';
import {IoIosArrowBack}from "react-icons/io"
import {CiCircleCheck} from "react-icons/ci";
import {CiCircleRemove} from "react-icons/ci";
import {BiDetail} from "react-icons/bi";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";


const ProductsDash = () => {
    const dispatch = useDispatch();
    const navigate = useHistory();
    const allProducts = useSelector(state => state.product);



    const handleBack = () => {
      navigate('/admin');
      window.scrollTo(0, {behavior: 'smooth'})
    };




    const Table = ({ columns, data, id}) => {
        const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            rows,
            prepareRow,
            page,
            nextPage,
            previousPage,
            canNextPage,
            canPreviousPage
        } = useTable({columns, data},  tableHooks, useSortBy, usePagination);


        return (
          <>
          {allProducts.length ? (
            <>
            <div>
              <button onClick={() => previousPage()} disabled={!canPreviousPage}><GrFormPrevious /></button>
              <button onClick={() => nextPage()} disabled={!canNextPage} ><GrFormNext /></button>
            </div>
            <table {...getTableProps()} >
              <thead>
                {headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                      <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                      {<span>{column.isSorted ? (column.isSortedDesc ? "▼" :  "▲") : ""}</span>}
                      
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map((row, i) => {
                  prepareRow(row)
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map(cell => {
                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      })}
                    </tr>
                  )
                })}
              </tbody>
            </table>
           
            </>
           ) :
            <span>Cargando</span>
          }
          </>
          )
        };
  
        const columns = React.useMemo(() => [
            {
                Header: 'Product',
                columns: [
                    {
                        Header: 'Name',
                        accessor: 'model',
                        
                    }
                ]
            },
            {
                Header: 'Info',
                columns: [
                            {
                              Header: 'id',
                              accessor: 'id',
                              
                            },
                            {
                                Header: 'Price',
                                accessor: 'price',
                                
                            },
                            {
                                Header: 'Stock',
                                accessor: 'stock',
                                
                            },
                            {
                              Header: 'Visible',
                              accessor: 'visible',
                              disableSortBy: true,
                              Cell: ({value}) => value === true ? <div ><CiCircleRemove  /></div> : <div ><CiCircleCheck /></div> 
                            },
                            {
                              Header: 'Image',
                              accessor: 'image',
                              disableSortBy: true,
                              Cell: ({value}) => <div><img  src={value}/></div> ,
                            }
                        ]
            }
        ], [])

        const tableHooks = hooks => {
          hooks.visibleColumns.push((columns) => [
            ...columns,
            {
              id: 'Detail',
              Header: 'Detail',
              Cell: ({row}) => (
                <div  onClick={()=>navigate(`/product/${row.values.id}`)}>

                <BiDetail />
                </div>
              )
            },
  
          ])
        }

        const data = allProducts?.map(e => {
           return  {...e, id: e.id}; 
        });
       

    return(
        <div >
       <div >
            <button onClick={handleBack} >
              <IoIosArrowBack/>
            </button>

          </div>
            <Table columns={columns} data={data} />
        </div>
    )
};

export default ProductsDash;