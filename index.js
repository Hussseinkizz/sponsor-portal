'use strict';

import { render } from './lib/z.js@v0.0.8.js';
import './lib/tailwindcss@v3.4.5.js';
import Layout from './pages/layout.js';
import HomePage from './pages/homePage.js';
import UploadPage from './pages/uploadsPage.js';
import AccountPage from './pages/accountPage.js';
import LoginPage from './pages/login.js';
import SignupPage from './pages/signup.js';

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
