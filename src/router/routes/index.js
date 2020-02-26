export default [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('../../views/Login')
  },
  {
    path: '/admin',
    redirect: '/admin/dashboard',
    component: () => import('../../views/Admin'),
    children: [
      {
        path: 'dashboard',
        component: () => import('../../views/AdminDashboard')
      },
      {
        path: ':id',
        component: () => import('../../views/AdminMenu')
      }
    ]
  }
]
