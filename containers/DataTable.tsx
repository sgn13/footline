import React from 'react';

const DataTable = ({ data = [], border = true }) => {
  return (
    <table className="table " style={{ textAlign: 'left' }}>
      <tbody>
        {data.map((item, index) => {
          return (
            <>
              <tr key={index.toString()} style={{ borderBottom: border && '1px solid silver' }}>
                <td
                  style={{
                    width: '60%',
                    fontSize: '.9rem',
                    verticalAlign: 'middle',
                    fontWeight: 'bolder',
                  }}
                >
                  <strong>{item.key}:</strong>
                </td>
                <td
                  style={{
                    width: '40%',
                    fontSize: '.9rem',
                    wordBreak: 'break-all',
                    verticalAlign: 'middle',
                    textAlign: 'right',
                    padding: '1rem',
                  }}
                >
                  {item.value}
                </td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
};

export default DataTable;
