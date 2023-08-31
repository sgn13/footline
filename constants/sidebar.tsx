import { app } from 'constants/url';
import React from 'react';
import { Ri4KFill, RiDashboardLine } from 'react-icons/ri';
import {
  FaAccessibleIcon,
  FaAdn,
  FaAngellist,
  FaCalendar,
  FaCalendarAlt,
  FaHome,
} from 'react-icons/fa';

export const sidebar = [
  {
    icon: '',
    label: '',
    location: '',
    path: '',
  },
];

export const IndexSidebar = ({}) => [
  {
    icon: <FaHome />,
    label: 'Home',
    location: 'top',
    path: '/',
  },
  {
    icon: <FaCalendarAlt />,
    label: 'Calendar',
    location: 'top',
    path: app.calendar.root,
  },
  {
    icon: <FaAccessibleIcon />,
    label: 'Example 1',
    location: 'top',
    path: app.example1.root,
  },
  {
    icon: <FaAdn />,
    label: 'Example 2',
    location: 'top',
    path: app.example2.root,
  },
  {
    icon: <FaAngellist />,
    label: 'Sidebar',
    location: 'top',
    children: [
      {
        icon: <Ri4KFill />,
        label: 'Sidebar Children',
        location: 'top',
        path: app.example1.root,
      },
    ],
  },
];
export const Example1Sidebar = ({}) => [
  {
    icon: <RiDashboardLine />,
    label: 'Home',
    location: 'top',
    path: '/',
  },
];
export const Example2Sidebar = ({}) => [
  {
    icon: <RiDashboardLine />,
    label: 'Home',
    location: 'top',
    path: '/',
  },
];

export default [];
