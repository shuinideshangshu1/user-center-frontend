export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: '登录',
        path: '/user/login',
        component: './user/Login',
      },
      {
        name: '注册',
        path: '/user/register',
        component: './user/Register',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: '个人设置',
    icon: 'smile',
    path: '/baseSettings',
    component: './BaseSettings',
  },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/user-manage',
        name: '用户管理',
        icon: 'smile',
        component: './Admin/UserManage',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/',
    redirect: '/baseSettings',
  },
  {
    path: '/user-manage',
    name: '使用人员',
    icon: 'smile',
    component: './UserManage',
  },
  {
    component: './404',
  },
];
