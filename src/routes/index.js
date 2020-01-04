import asyncComponet from '../hoc/asyncComponent';

const AsyncHome = asyncComponet(() => import('../views/home'));
const PageNotFound = asyncComponet(() => import('../views/404'));

const ROUTES = [
  {
    exact: true,
    path: '/',
    component: AsyncHome,
  },
  {
    component: PageNotFound,
  },
];

export default ROUTES;
