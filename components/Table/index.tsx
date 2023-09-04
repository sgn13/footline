import { TableLoader } from 'components/Loader';
import React from 'react';
import { includesEvery } from 'utils/array';

const Table = ({
  tableHeaders,
  body,

  generateSN = true,
  isLoading,

  widget = false,

  onClick,
  onDoubleClick,

  action,

  page,
  perPage,

  tableSelection,
  setTableSelection,
}) => {
  const allKeys = body.map((item) => {
    const keyItem = item.find((item) => item.type === 'key');

    return keyItem.value;
  });
  return (
    <div className={'table__container'}>
      <table className="table table-hover d-none d-sm-table base__table">
        <thead>
          <tr style={{ background: '#F5F7FA', border: 'none' }}>
            {!!(tableSelection && setTableSelection) && (
              <th style={{ border: 'none' }}>
                <input
                  type="checkbox"
                  checked={includesEvery({
                    arr: tableSelection,
                    target: allKeys,
                  })}
                  onClick={() => {
                    setTableSelection((prev) =>
                      includesEvery({
                        arr: tableSelection,
                        target: allKeys,
                      })
                        ? prev.filter((key) => !new Set(allKeys).has(key))
                        : [...prev, ...allKeys],
                    );
                  }}
                />
              </th>
            )}
            {!!generateSN && <th className="sn">S.N.</th>}
            {tableHeaders
              .filter(({ hidden = false }) => !hidden)
              .map((t, i) => {
                return (
                  <>
                    {t.value && (
                      <th
                        key={i}
                        // style={t.styles}
                        style={{ border: 'none' }}
                        className={t.value === 'Action' && 'action-style'}>
                        <div style={{ display: 'flex', border: 'none' }}>
                          <span className={t.value === 'Action' && 'action-style'}>{t.value}</span>
                        </div>
                      </th>
                    )}
                  </>
                );
              })}
          </tr>
        </thead>
        <tbody>
          {!isLoading &&
            body.map((item, bodyIndex) => {
              const keyItem = item.find((item) => item.type === 'selection-key');

              return (
                <tr
                  key={bodyIndex}
                  onClick={() => onClick && onClick({ item })}
                  onDoubleClick={() => onDoubleClick && onDoubleClick({ item })}>
                  {!!(tableSelection && setTableSelection) && (
                    <td>
                      <input
                        type="checkbox"
                        checked={tableSelection.includes(keyItem.value)}
                        onClick={() =>
                          setTableSelection((prev) =>
                            tableSelection.includes(keyItem.value)
                              ? prev.filter((item) => item !== keyItem.value)
                              : [...prev, keyItem.value],
                          )
                        }
                      />
                    </td>
                  )}
                  {generateSN && <td className="sn">{perPage * (page - 1) + bodyIndex + 1}</td>}
                  {item
                    .filter(({ hidden = false }) => !hidden)
                    .map((t, itemIndex) => (
                      <td key={itemIndex} style={t.styles}>
                        {t.value}
                      </td>
                    ))}
                  {action && action({ item })}
                </tr>
              );
            })}
        </tbody>
      </table>
      {!!isLoading && <TableLoader />}
    </div>
  );
};
export default Table;
