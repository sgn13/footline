import { app } from 'constants/url';

import React from 'react';

const Example1 = React.lazy(() => import('./example1/Index'));

const Example2 = React.lazy(() => import('./example2/Index'));
const CreateUpdateExample2 = React.lazy(() => import('./example2/CreateUpdate'));
const ViewExample2 = React.lazy(() => import('./example2/View'));

import withAuth from 'hoc/withAuth';
import { generateCreate, generateUpdate, generateView } from 'utils/routes';

export default [
  {
    title: 'Example 1',
    bodyConfig: { use: true, title: true, goBack: true },
    path: app.example1.root,
    exact: true,
    component: withAuth(Example1),
  },
  {
    title: 'Example2',
    bodyConfig: { use: true, title: true, goBack: true },
    path: app.example2.root,
    exact: true,
    component: withAuth(Example2),
  },
  {
    title: 'Add Example2',
    bodyConfig: { use: true, title: true, goBack: true },
    path: generateCreate({ path: app.example2.root, entity: '' }),
    exact: true,
    component: withAuth(CreateUpdateExample2),
  },
  {
    title: 'Update Example2',
    bodyConfig: { use: true, title: true, goBack: true },
    path: generateUpdate({ path: app.example2.root, entity: '' }),
    exact: true,
    component: withAuth(CreateUpdateExample2),
  },
  {
    title: 'View Example2',
    bodyConfig: { use: true, title: true, goBack: true },
    path: generateView({ path: app.example2.root, entity: '' }),
    exact: true,
    component: withAuth(ViewExample2),
  },
];
