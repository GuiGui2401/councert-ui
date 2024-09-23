import React from 'react';

import { Icon } from '@chakra-ui/react';
import {
  MdHome,
  MdPerson,
  MdFavorite,
  MdError  ,
} from 'react-icons/md';

// Admin Imports
import MainDashboard from 'views/admin/default';
import Birth from 'views/admin/birth';
import Death from 'views/admin/death';
import Marriage from 'views/admin/marriage';

const routes = [
  {
    name: 'Main Dashboard',
    layout: '/admin',
    path: '/default',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <MainDashboard />,
  },
  {
    name: 'Birth Certificate',
    layout: '/admin',
    path: '/birth',
    icon: (
      <Icon
        as={MdPerson}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: <Birth />,
    secondary: true,
  },
  {
    name: 'Marriage Certificate',
    layout: '/admin',
    icon: <Icon as={MdFavorite } width="20px" height="20px" color="inherit" />,
    path: '/marriage',
    component: <Marriage />,
  },
  {
    name: 'Death Certificate',
    layout: '/admin',
    path: '/death',
    icon: <Icon as={MdError  } width="20px" height="20px" color="inherit" />,
    component: <Death />,
  },
];

export default routes;
