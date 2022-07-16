import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/Dashboard',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Create Invoice',
    path: '/invoice/create',
    icon: <FaIcons.FaUpload />,
    cName: 'nav-text'
  },
  
  {
    title: 'Upload Invoice',
    path: '/invoice/upload/api',
    icon: <IoIcons.IoIosCloudUpload />,
    cName: 'nav-text'
  },
  {
    title: 'Collect Invoice',
    path: '/invoice/upload/email',
    icon: <AiIcons.AiFillMail/>,
    cName: 'nav-text'
  },
  {
    title: 'Send Invoice',
    path: '/invoice/send',
    icon: <FaIcons.FaArrowRight/>,
    cName: 'nav-text'
  },
  {
    title: 'Reports',
    path: '/report/list',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
    
  },
  {
    title: 'Subscription',
    path: '/Subscription',
    icon: <IoIcons.IoIosCard/>,
    cName: 'nav-text'
    
  },
  
 
  // {
  //   title: 'Remove Invoice',
  //   path: '/invoice/remove',
  //   icon: <AiIcons.AiFillDelete />,
  //   cName: 'nav-text'
  // },

];
