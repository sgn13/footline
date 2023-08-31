import React from 'react';

const _401 = React.lazy(() => import('pages/messages/_401'));
const _404 = React.lazy(() => import('pages/messages/_404'));
const _408 = React.lazy(() => import('pages/messages/_408'));
const _503 = React.lazy(() => import('pages/messages/_503'));

const Index = React.lazy(() => import('./pages/Index'));

const Login = React.lazy(() => import('pages/auth/Login'));
const ForgotPassword = React.lazy(() => import('pages/auth/ForgotPassword'));
const ResetPassword = React.lazy(() => import('pages/auth/ResetPassword'));

import ExampleRoute from 'pages/example/routes';

import IndexHOC from 'hoc/IndexHOC';

import { app } from 'constants/url';
import Calendar from 'pages/Calendar';

export const routes = [
  {
    title: 'Home',
    bodyConfig: { use: true, title: true, goBack: true },
    path: '/',
    exact: true,
    component: IndexHOC(Index),
  },
  {
    title: 'Calendar',
    bodyConfig: { use: true, title: true, goBack: true },
    path: app.calendar.root,
    exact: true,
    component: IndexHOC(Calendar),
  },
  ...ExampleRoute,
  {
    title: '',
    bodyConfig: { use: true, title: true, goBack: true },
    path: '',
    exact: true,
    component: _404,
  },
];

export const authRoutes = [
  {
    title: 'Login',
    bodyConfig: { use: false, title: false, goBack: false },
    path: '/login',
    exact: true,
    component: Login,
  },
  {
    title: 'Forgot Password',
    bodyConfig: { use: false, title: false, goBack: false },
    path: '/forgot-password',
    exact: true,
    component: ForgotPassword,
  },

  {
    title: 'Reset Password',
    bodyConfig: { use: false, title: false, goBack: false },
    path: '/reset-password',
    exact: true,
    component: ResetPassword,
  },
];

export const messageRoutes = [
  {
    title: 'Under Maintenance',
    bodyConfig: { use: true, title: true, goBack: true },
    path: '/under-maintenance',
    exact: true,
    component: _401,
  },
  {
    title: 'Restricted',
    bodyConfig: { use: true, title: true, goBack: true },
    path: '/restricted',
    exact: true,
    component: _401,
  },
  {
    title: 'Under Construction',
    bodyConfig: { use: true, title: true, goBack: true },
    path: '/under-construction',
    exact: true,
    component: _503,
  },
  {
    title: '',
    bodyConfig: { use: true, title: true, goBack: true },
    path: '/timeout',
    exact: true,
    component: _408,
  },
];

export default routes;
