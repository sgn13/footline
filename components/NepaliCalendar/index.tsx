import React, { useEffect, useState } from 'react';

import NepaliDate from 'lib/NepaliDateConverter';

import calendars from 'db/calendars';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { AiFillPlusCircle } from 'react-icons/ai';
import theme, { styled } from 'theme/styled-components';
import { FormModal } from 'components/Modal/index';
import { getNepaliDigits, getNepaliMonth } from 'utils/date';
import { sliceIntoChunks } from 'utils/array';
import { date } from 'yup/lib/locale';
// import theme from 'theme';

const weeks = ['आइत', 'सोम', 'मंगल', 'वुध', 'विही', 'शुक्र', 'शनि'];

const CalendarWrapper = styled.div`
  background: #fff;
  color: #545454;
  position: relative;

  width: 100%;
  height: 100%;

  cursor: pointer;

  overflow-x: auto;

  table {
    width: 100%;
  }

  td {
    padding: 0px;
    overflow: hidden;
  }

  th {
    background-color: ${theme.secondary.default};
    text-align: center;
    padding-top: 0.5rem;
    border-radius: 0 !important;
  }
`;

const CalendarHeader = styled.div`
  background-color: ${theme.primary.default};
  color: #ffffff;
  text-align: center;
  font-weight: bold;
  padding: 12px;
  box-sizing: border-box;
  border-radius: 5px 5px 0 0;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ActionButton = styled.button`
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  color: #fff;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  font-size: 1em;
`;

const NepaliHeader = styled.span`
  text-transform: uppercase;
  margin: 0px 10px;
  font-size: 1.5em;
  width: 255px;
`;
const EnglishHeader = styled.span`
  position: absolute;
  right: 10px;
  font-size: 1em;
`;

const DayName = styled.span``;

const DayWrapper = styled.div<{ today; holiday; disabled }>`
  box-sizing: border-box;
  position: relative;
  font-weight: 700;
  -webkit-transition: 0.25s;
  transition: 0.25s;
  text-decoration: none;

  height: 100px;

  border: thin solid #eee;

  &:hover {
    background-color: #eee;
  }

  ${({ today }) => today && `background: #eee;`}
  ${({ holiday }) => holiday && `color: red !important;`}
  ${({ disabled }) => disabled && `color: gray;`}
`;

const DayEnglishDate = styled.span`
  position: absolute;
  font-size: 10px;
  bottom: 5px;
  right: 10px;
  font-weight: 600;
`;

const DayNepaliDate = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  text-align: center;
  text-decoration: none;
  font-weight: 800;
`;

const DayEvent = styled.span`
  display: none;
  left: 20px;
  top: 12px;
`;

const DayTithi = styled.span`
  display: none;
`;
const EventWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  svg {
    position: absolute;
  }
`;
const Event = styled.div`
  display: block;
  font-size: 12px;
  font-weight: 300;

  position: absolute;
  right: 0;
  text-align: right;
  span {
    color: #fff;
    padding: 2px;
    border-radius: 4px;
  }
`;
const Week = ({ data, show, events, showevent, allowCreate, allowEdit, allowDelete }) => {
  let weeks = sliceIntoChunks(data, 7);
  const compareDate = ({ date1, date2 }) => {
    const splitted1 = String(date1).split('-');
    const splitted2 = String(date2).split('-');

    return (
      Number(splitted1[0]) === Number(splitted2[0]) &&
      Number(splitted1[1]) === Number(splitted2[1]) &&
      Number(splitted1[2]) === Number(splitted2[2])
    );
  };

  return (
    <>
      {weeks.map((week, i) => (
        <tr key={i}>
          {week.map((data, i) => {
            const filteredEvents = events.filter((item) => {
              return compareDate({ date1: item.start_date, date2: data.enDate });
            });

            return (
              <td
                key={i}
                style={{
                  width: '14%',
                }}
              >
                <DayWrapper
                  today={
                    new Date(data.enDate).getFullYear() === new Date().getFullYear() &&
                    new Date(data.enDate).getMonth() === new Date().getMonth() &&
                    new Date(data.enDate).getDate() === new Date().getDate()
                  }
                  holiday={data.isHoliday || (week && i === week.length - 1)}
                  disabled={data.isDisabled}
                >
                  <EventWrapper>
                    {!data.isDisabled && !!allowCreate && (
                      <AiFillPlusCircle
                        onClick={() => {
                          show(data);
                        }}
                        style={{ fill: `${theme.primary.default}`, fontSize: '1.2rem' }}
                      />
                    )}

                    <Event>
                      {filteredEvents.map((item) => {
                        return (
                          <>
                            {item && item.event_priority === 'REG' ? (
                              <span
                                style={{ background: `${theme.primary.default}` }}
                                onClick={() => {
                                  showevent(item);
                                }}
                              >
                                {item.event_name}
                              </span>
                            ) : (
                              <span
                                style={{ background: `${theme.secondary.default}` }}
                                onClick={() => {
                                  showevent(item);
                                }}
                              >
                                {item.event_name}
                              </span>
                            )}

                            <br />
                            <br />
                          </>
                        );
                      })}
                    </Event>
                  </EventWrapper>

                  {data.eng && <DayEnglishDate>{data.eng}</DayEnglishDate>}
                  {data.nep && <DayNepaliDate>{data.nep}</DayNepaliDate>}
                  {false && data.event && <DayEvent>{data.event}</DayEvent>}
                  {false && data.tithi && <DayTithi>{data.tithi}</DayTithi>}
                </DayWrapper>
              </td>
            );
          })}
        </tr>
      ))}
    </>
  );
};

const NepaliCalendar = ({ show, events = [], showevent, allowCreate, allowDelete, allowEdit }) => {
  const nepaliDate = new NepaliDate(new Date());

  const [calendar, setCalendar] = useState([]);
  const [year, setYear] = useState(nepaliDate.getYear());
  const [month, setMonth] = useState(nepaliDate.getMonth() + 1);
  const [block, setBlock] = useState(undefined);

  useEffect(() => {
    calendars && setCalendar(calendars[year]);
  }, [calendars, year]);

  useEffect(() => {
    calendar && calendar.length && setBlock(calendar.find((item) => item.month === month));
  }, [month, calendar]);

  const PreviousButton = (
    <ActionButton
      onClick={(e) => {
        e.stopPropagation();
        if (month != 1) {
          setMonth(month - 1);
        } else {
          if (calendars[year - 1]) {
            setMonth(12);
            setYear(year - 1);
          }
        }
      }}
    >
      <FaChevronLeft />
    </ActionButton>
  );

  const NextButton = (
    <ActionButton
      onClick={(e) => {
        e.stopPropagation();
        if (month != 12) {
          setMonth(month + 1);
        } else {
          if (calendars[year + 1]) {
            setMonth(1);
            setYear(year + 1);
          }
        }
      }}
    >
      <FaChevronRight />
    </ActionButton>
  );

  return (
    <CalendarWrapper>
      <CalendarHeader>
        {calendar.length ? PreviousButton : <> {month != 12 && PreviousButton}</>}
        {calendar.length ? (
          <NepaliHeader>
            {getNepaliMonth(block && block.month)}, {getNepaliDigits(year)}
          </NepaliHeader>
        ) : (
          <>{month === 1 ? 'View Previous' : 'View Next'}</>
        )}
        {calendar.length ? NextButton : <> {month != 1 && NextButton}</>}
        <EnglishHeader> {block && block.head.en}</EnglishHeader>
      </CalendarHeader>
      <table>
        <thead>
          <tr>
            {weeks.map((day, i) => (
              <th key={i}>
                <DayName>{day}</DayName>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block && (
            <Week
              data={block.date}
              show={show}
              events={events}
              showevent={showevent}
              allowCreate={allowCreate}
              allowDelete={allowDelete}
              allowEdit={allowEdit}
            />
          )}
        </tbody>
      </table>
    </CalendarWrapper>
  );
};

export default NepaliCalendar;
