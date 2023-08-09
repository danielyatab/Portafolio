import { FaBriefcase, FaEnvelopeOpen, FaFolderOpen, FaHome, FaUser, FaCode } from 'react-icons/fa'
import {TbSourceCode} from 'react-icons/tb'
import { FiFileText, FiUser } from 'react-icons/fi'
import Work1 from './assets/pexels-rovenimagescom-949587.jpg'


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


export const personalInfo = [
  {
    id:1,
    title: 'First Name: ',
    description: 'Steve',
  },
  {
    id:2,
    title: 'Last Name: ',
    description: 'Milner'
  },

  {
    id:3,
    title: 'Age: ',
    description: '19 years'
  },
  {
    id:5,
    title: 'Freelance: ',
    description: 'Available',
  },
  {
    id:6,
    title: 'Addres: ',
    description: 'Chincha'
  },
  {
    id:7,
    title: 'Phone: ',
    description: '+51 928727813',
  },
  {
    id:8,
    title: 'Email: ',
    description: 'yataco-125@hotmail.com',
  },
  {
    id:9,
    title: 'Gmail: ',
    description: 'ingyatacoblas@gmail.com',
  },
  {
    id:10,
    title: 'Languajes: ',
    description: 'Spanish, English',
  },

]

export const statsInfo = [
  {
    id:1,
    no:'12+',
    title: 'Years of <br /> Experience',
  },
  {
    id:2,
    no:'12+',
    title: 'Years of <br /> Experience',
  },
  {
    id:3,
    no:'12+',
    title: 'Years of <br /> Experience',
  },
  {
    id:4,
    no:'12+',
    title: 'Years of <br /> Experience',
  },
]

export const resume = [
  {
    id:1,
    category:'experience',
    icon: <FaBriefcase/>,
    year: '2018 - PRESENT',
    title: 'Web Developer <span> Envato </span>',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consequatur ab quasi error tempora necessitatibus nemo. Esse voluptatibus illum'
  },
  {
    id:2,
    category:'experience',
    icon: <FaBriefcase/>,
    year: '2018 - PRESENT',
    title: 'Web Developer <span> Envato </span>',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consequatur ab quasi error tempora necessitatibus nemo. Esse voluptatibus illum'
  },
  {
    id:3,
    category:'education',
    icon: <FaBriefcase/>,
    year: '2018 - PRESENT',
    title: 'Web Developer <span> Envato </span>',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consequatur ab quasi error tempora necessitatibus nemo. Esse voluptatibus illum'
  },
  {
    id:4,
    category:'education',
    icon: <FaBriefcase/>,
    year: '2018 - PRESENT',
    title: 'Web Developer <span> Envato </span>',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consequatur ab quasi error tempora necessitatibus nemo. Esse voluptatibus illum'
  },
  
]

export const skills = [
  {
    id:1,
    title: 'Html',
    percentage: '25',
  },
  {
    id:2,
    title: 'JavaScript',
    percentage: '25',
  },
  {
    id:3,
    title: 'Css',
    percentage: '25',
  },
  {
    id:4,
    title: 'React',
    percentage: '25',
  },
  {
    id:5,
    title: 'Node Js',
    percentage: '25',
  },
  {
    id:6,
    title: 'Mysql',
    percentage: '45',
  },
  {
    id:7,
    title: 'Oravle DB',
    percentage: '55',
  },
  {
    id:8,
    title: 'Java',
    percentage: '35',
  },
  {
    id:7,
    title: 'Mongo Db',
    percentage: '75',
  },
]


export const PortafolioItems = [
  {
    id:1,
    img: Work1,
    title: 'System Store',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project: ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client: ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Languaje: ',
        desc: 'Java',
      },
      {
        icon: <TbSourceCode />,
        title: 'Preview: ',
        desc: 'www.drible.com',
      }
    ]
  },
  {
    id:2,
    img: Work1,
    title: 'System Store',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project: ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client: ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Languaje: ',
        desc: 'Java',
      },
      {
        icon: <TbSourceCode />,
        title: 'Preview: ',
        desc: 'www.drible.com',
      }
    ]
  },
  {
    id:3,
    img: Work1,
    title: 'System Store',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project: ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client: ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Languaje: ',
        desc: 'Java',
      },
      {
        icon: <TbSourceCode />,
        title: 'Preview: ',
        desc: 'www.drible.com',
      }
    ]
  },
  {
    id:4,
    img: Work1,
    title: 'System Store',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project: ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client: ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Languaje: ',
        desc: 'Java',
      },
      {
        icon: <TbSourceCode />,
        title: 'Preview: ',
        desc: 'www.drible.com',
      }
    ]
  },
  {
    id:5,
    img: Work1,
    title: 'System Store',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project: ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client: ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Languaje: ',
        desc: 'Java',
      },
      {
        icon: <TbSourceCode />,
        title: 'Preview: ',
        desc: 'www.drible.com',
      }
    ]
  },
  {
    id:6,
    img: Work1,
    title: 'System Store',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project: ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client: ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Languaje: ',
        desc: 'Java',
      },
      {
        icon: <TbSourceCode />,
        title: 'Preview: ',
        desc: 'www.drible.com',
      }
    ]
  },
  
]