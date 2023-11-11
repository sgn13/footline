import React, { useState } from 'react';
import { FaEdit, FaEye, FaPlus, FaTrashAlt, FaSyncAlt, FaFileCsv } from 'react-icons/fa';

import { q } from 'constants/query';

import Table from 'components/Table';
import Button from 'components/Button';
import Pagination from 'components/Pagination';

import { styled } from 'theme/styled-components';
import Search from 'components/Search';

import { CSVLink } from 'react-csv';

const TableWrapper = styled.div`
  padding: 1rem;

  background: #ffffff;
  border-radius: 7px;

  thead {
    font-weight: bold;
  }

  tbody:before {
    content: '@';
    display: block;
    line-height: 10px;
    text-indent: -99999px;
  }
`;

const TableNav = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  margin-bottom: 1rem;

  button {
    margin-left: 0.5rem;
  }

  a {
    text-decoration: none;
  }
`;

const ExportReactCSV = ({ csvHeaders, csvData, fileName }) => (
  <CSVLink tableHeaders={csvHeaders} data={csvData} filename={fileName}>
    <Button
      icon={<FaFileCsv />}
      variant="success"
      style={{ width: 'fit-content', textDecoration: 'none' }}
      size="sm">
      Export CSV
    </Button>
  </CSVLink>
);

const DataContainer = ({
  name,

  metadata = { page: q.page, perPage: q.perPage, totalCount: 0, totalPage: 0 },

  dataSource,

  renderTableData,
  renderCSVData,

  funktion,
  resetSearchFunction,

  onAdd,
  onRead,
  onUpdate,
  onDelete,
  onDownload,
  customTableAction,

  columns = [],
  tableHeaders = [],
  csvHeaders = [],
  body = [],

  children,

  generateSN = true,

  allowSearch = true,
  autoSearch = false,

  showPerPage = true,
  showPagination = true,
  showRefreshButton = true,
  showDownloadCSV = true,

  isLoading = false,

  permissions = [],
  permission,

  onClick,
  onDoubleClick,

  defaultPerPage,

  tableNavChild,

  tableSelection,
  setTableSelection,
}) => {
  const [page, setPage] = useState(metadata.page || q.page);
  const [perPage, setPerPage] = useState<any>(metadata.perPage || defaultPerPage || q.perPage);

  const [searchKey, setSearchKey] = useState('');
  const [isSearched, setIsSearched] = useState(false);

  const useAction =
    (onDelete || onRead || onUpdate || onDownload || customTableAction) !== undefined;

  tableHeaders = tableHeaders.includes({ value: 'Action' })
    ? tableHeaders
    : useAction
    ? [...tableHeaders, { value: 'Action' }]
    : tableHeaders;

  const userPermissions = permissions.map((item) => item.permission) || [];

  return (
    <TableWrapper>
      <TableNav>
        <div>
          {' '}
          {!!allowSearch && (
            <Search
              funktion={(data) =>
                funktion({ query: { perPage, page: 1, ...data.query }, search: data.search })
              }
              {...{
                searchKey,
                setSearchKey,
                isSearched,
                setIsSearched,
                autoSearch,
                resetSearchData: resetSearchFunction,
              }}
            />
          )}
        </div>
        <div style={{ display: 'flex' }}>
          {onAdd && (
            <Button icon={<FaPlus />} style={{ width: 'fit-content' }} size="md" onClick={onAdd}>
              Add {name}
            </Button>
          )}
          {showDownloadCSV && renderCSVData && (
            <ExportReactCSV
              csvData={renderCSVData(dataSource)}
              csvHeaders={csvHeaders}
              fileName={name.replace(/\s/g, '') + '.csv'}
            />
          )}
          {showRefreshButton && (
            <Button
              size="sm"
              onClick={() => funktion({ query: { perPage, page } })}
              variant="success"
              disabled={isLoading}>
              {isLoading ? (
                'Loading…'
              ) : (
                <>
                  <FaSyncAlt /> Refresh
                </>
              )}
            </Button>
          )}
        </div>
      </TableNav>

      {tableNavChild && <TableNav>{tableNavChild}</TableNav>}

      <> {children}</>

      <Table
        tableHeaders={tableHeaders}
        isLoading={isLoading}
        generateSN={generateSN}
        body={body.length ? body : renderTableData ? renderTableData(dataSource) : []}
        page={page}
        perPage={perPage}
        onClick={onClick}
        onDoubleClick={onDoubleClick}
        tableSelection={tableSelection}
        setTableSelection={setTableSelection}
        action={({ item }) => (
          <>
            {useAction && (
              <td>
                {onRead && <FaEye style={{ color: '#0467a0' }} onClick={() => onRead({ item })} />}
                {onUpdate && (
                  <FaEdit
                    style={{ color: '#0467a0', margin: '0 8px' }}
                    onClick={() => onUpdate({ item })}
                  />
                )}
                {onDelete && (
                  <FaTrashAlt style={{ color: '#c83734' }} onClick={() => onDelete({ item })} />
                )}

                {customTableAction && customTableAction({ item })}
                {onDownload && onDownload({ item })}
              </td>
            )}
          </>
        )}
      />
      {!!(showPerPage || showPagination) && funktion && (
        <TableNav>
          {!!showPerPage && (
            <select
              value={perPage}
              onChange={(e) => {
                setPerPage(e.target.value);
                setPage(1);
                funktion({
                  query: {
                    perPage: Number(e.target.value),
                    page: 1,
                  },
                });
              }}>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          )}
          {!!showPagination && funktion && (
            <Pagination
              className="pagination-bar"
              currentPage={page}
              totalCount={metadata.totalCount}
              perPage={perPage}
              onPageChange={(page) => {
                setPage(page);
                funktion({ query: { perPage, page } });
              }}
            />
          )}
        </TableNav>
      )}
    </TableWrapper>
  );
};

export default DataContainer;
