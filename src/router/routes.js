
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: "propiedadescomputadas",
        component: () => import("src/pages/PropiedadesComputadas.vue"),
      },
      {
        path: "estilosyclases",
        component: () => import("src/pages/EstilosyClases.vue"),
      },
      {
        path: "ifshow",
        component: () => import("src/pages/IfShow.vue"),
      },
      {
        path: "eventosvue",
        component: () => import("src/pages/EventosVue.vue"),
      },
      {
        path: "ciclovida",
        component: () => import("src/pages/CicloVida.vue"),
      },
      {
        path: "watchervue",
        component: () => import("src/pages/WatcherVue.vue"),
      },
      {
        path: "componentepadre",
        component: () => import("src/pages/ComponentePadre.vue"),
      },
      {
        path: "components/tareadetalle",
        component: () => import("src/components/TareaDetalle.vue"),
      },
      {
        path: "griddiseno",
        component: () => import("src/pages/GridDiseno.vue"),
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
