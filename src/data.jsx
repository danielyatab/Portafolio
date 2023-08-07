import { FaEnvelopeOpen, FaFolderOpen, FaHome, FaUser } from 'react-icons/fa'

export const links = [
  {
    id:1,
    name: 'Home',
    icon: <FaHome clasName="nav__icon" />,
    path: '/'
  },
  {
    id:2,
    name: 'About',
    icon: <FaUser clasName="nav__icon" />,
    path: '/about'
  },
  {
    id:3,
    name: 'Portafolio',
    icon: <FaFolderOpen clasName="nav__icon" />,
    path: '/portafolio'
  },
  {
    id:4,
    name: 'Contact',
    icon: <FaEnvelopeOpen clasName="nav__icon" />,
    path: '/contact'
  },
]