import { app } from 'constants/url';
import React from 'react';
import { RiDashboardLine } from 'react-icons/ri';

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
    icon: <RiDashboardLine />,
    label: 'Home',
    location: 'top',
    path: '/',
  },
  {
    icon: <RiDashboardLine />,
    label: 'Example 1',
    location: 'top',
    path: app.example1.root,
  },
  {
    icon: <RiDashboardLine />,
    label: 'Example 2',
    location: 'top',
    path: app.example2.root,
  },
  {
    icon: <RiDashboardLine />,
    label: 'Sidebar',
    location: 'top',
    children: [
      {
        icon: <RiDashboardLine />,
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
