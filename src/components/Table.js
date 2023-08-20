import { React } from "react";
import {
  useTable,
  useBlockLayout,
  usePagination,
  useSortBy,
} from "react-table";
import { useSticky } from "react-table-sticky";
import styles from "../styles/Table.module.css";

export default function Table(props) {
  const data = props.data;
  const columns = props.columns;

  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 50 },
    },
    useBlockLayout,
    useSortBy,
    usePagination,
    useSticky
  );

  // Render the UI for your table
  return (
    <div id={styles.totalContainer}>
      <div id={styles.tableContainer}>
        <div
          className={`${styles.table} ${styles.sticky}`}
          {...getTableProps()}
        >
          <div className={`${styles.header}`}>
            {headerGroups.map((headerGroup) => (
              <div
                {...headerGroup.getHeaderGroupProps()}
                className={`${styles.tr}`}
              >
                {headerGroup.headers.map((column) => (
                  <div
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className={`${styles.th}`}
                  >
                    {column.render("Header")}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className={`${styles.body}`} {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <div className={`${styles.tr}`} {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <div className={`${styles.td}`} {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <div className="pagination">
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {"<<"}
          </button>{" "}
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {"<"}
          </button>{" "}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {">"}
          </button>{" "}
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {">>"}
          </button>{" "}
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <span>
            | Go to page:{" "}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: "100px" }}
            />
          </span>{" "}
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[25, 50, 100, 150, 200].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
