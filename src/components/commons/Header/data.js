import GroupIcon from '@material-ui/icons/Group';
import PersonIcon from '@material-ui/icons/Person';
import DashboardIcon from '@material-ui/icons/Dashboard';

export const drawerItens = [
  {
    title: 'Dashboard',
    link: '/dashboard',
    icon: <DashboardIcon />,
  },
  {
    title: 'Usuários',
    link: '/users',
    icon: <PersonIcon />,
  },
  {
    title: 'Grupos',
    link: 'groups',
    icon: <GroupIcon />,
  },
];
