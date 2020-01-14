
export default [
    {
        path: '/',
        redirect: '/admin'
    },
    {
        path: '/admin',
        component: () => import('../../views/Admin'),
        children: [
            {
                path: 'dashboard',
                component: () => import('../../views/AdminDashboard')
            }
        ]
    }
]