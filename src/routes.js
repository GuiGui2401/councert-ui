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
import Profile from 'views/admin/profile';
import BirthDetails from 'views/admin/birth/Details/BirthDetails';

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
  {
    name: '',
    layout: '/admin',
    path: '/birth/details', // Nouveau chemin
    component: <BirthDetails />, // Composant associé
  },{
    name: '',
    layout: '/admin',
    path: '/default/profile', // Nouveau chemin
    component: <Profile />, // Composant associé
  },
];

export default routes;
