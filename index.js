'use strict';

import { render } from 'z-js-framework';
import './lib/tailwindcss@v3.4.5';
import Layout from './pages/layout';
import HomePage from './pages/homePage';
import UploadPage from './pages/uploadsPage';
import AccountPage from './pages/accountPage';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';

const root = document.getElementById('root');

// define your routes here
const routes = [
  {
    route: '/',
    component: LoginPage,
  },
  {
    route: '/login',
    component: LoginPage,
  },
  {
    route: '/portal',
    component: Layout,
  },
  {
    route: '/signup',
    component: SignupPage,
  },
  {
    route: '/home',
    component: HomePage,
  },
  {
    route: '/upload',
    component: UploadPage,
  },
  {
    route: '/account',
    component: AccountPage,
  },
];

render(root, routes);
