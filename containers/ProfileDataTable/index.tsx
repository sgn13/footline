import BaseComponent from 'components/BaseComponent';
import { StyledProfileType } from './types';
import { StyledBaseComponentType } from 'components/BaseComponent/types';
import React from 'react';

type BaseProfileType = React.ComponentProps<'div'> &
  StyledProfileType &
  StyledBaseComponentType & { ref?: any };

const ProfileDataTable: React.FC<BaseProfileType> = ({ data = [] }) => {
  return (
    <BaseComponent>
      <table className="table " style={{ textAlign: 'left' }}>
        <tbody style={{ gridTemplateColumns: '1fr 1fr' }}>
          {data.map((item, index) => {
            return (
              <tr key={index.toString()} style={{ border: 'none' }}>
                <td
                  style={{
                    border: 'none',
                    width: '20%',
                    verticalAlign: 'middle',
                    fontWeight: 'bolder',
                  }}
                >
                  <strong>{item.key}</strong>
                </td>
                <td
                  style={{
                    border: 'none',
                    wordBreak: 'break-all',
                    verticalAlign: 'middle',
                    color: 'grey',
                  }}
                >
                  {item.value}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </BaseComponent>
  );
};

export default ProfileDataTable;
