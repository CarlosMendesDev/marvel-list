const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'index', path: '', component: () => import('pages/Index.vue') },
    ],
  },

  {
    path: '/hero-details',
    component: () => import('layouts/HeroDetailsLayout.vue'),
    children: [
      { name: 'details', path: ':id', component: () => import('pages/HeroDetails.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
