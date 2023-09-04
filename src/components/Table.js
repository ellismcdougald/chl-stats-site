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

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
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
      initialState: {
        pageIndex: 0,
        pageSize: 50,
        sortBy: [{ id: "points", desc: true }],
      },
    },
    useBlockLayout,
    useSortBy,
    usePagination,
    useSticky
  );

  return (
    <div id={styles.totalContainer}>
      <div id={styles.tableContainer}>
        <div
          className={`${styles.table} ${styles.sticky}`}
          {...getTableProps()}
        >
          <div className={`${styles.header}`}>
            {headerGroups.map((headerGroup) => {
              const headerGroupProps = headerGroup.getHeaderGroupProps();
              const headerGroupKey = headerGroupProps.key;
              delete headerGroupProps.key;
              return (
                <div
                  key={headerGroupKey}
                  {...headerGroupProps}
                  className={`${styles.tr}`}
                >
                  {headerGroup.headers.map((column) => {
                    const headerProps = column.getHeaderProps(
                      column.getSortByToggleProps()
                    );
                    const headerKey = headerProps.key;
                    delete headerProps.key;
                    return (
                      <div
                        key={headerKey}
                        {...headerProps}
                        className={`${styles.th}`}
                      >
                        {column.render("Header")}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div className={`${styles.body}`} {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              const rowProps = row.getRowProps();
              const rowKey = rowProps.key;
              delete rowProps.key;
              return (
                <div className={`${styles.tr}`} key={rowKey} {...rowProps}>
                  {row.cells.map((cell) => {
                    const cellProps = cell.getCellProps();
                    const cellKey = cellProps.key;
                    delete cellProps.key;
                    return (
                      <div
                        className={`${styles.td}`}
                        key={cellKey}
                        {...cellProps}
                      >
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
