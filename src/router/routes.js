const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/propiedadescomputadas",
    component: () => import("layouts/LayoutDos.vue"),
    children: [
      { path: "", component: () => import("pages/PropiedadesComputadas.vue") },
    ],
  },
  {
    path: "/estilosyclases",
    component: () => import("layouts/LayoutTres.vue"),
    children: [
      { path: "", component: () => import("pages/EstilosyClases.vue") },
    ],
  },
  {
    path: "/ifshow",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IfShow.vue") }],
  },
  {
    path: "/eventosvue",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/EventosVue.vue") }],
  },
  {
    path: "/ciclovida",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/CicloVida.vue") }],
  },
  {
    path: "/watchervue",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/WatcherVue.vue") }],
  },
  {
    path: "/componentepadre",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/ComponentePadre.vue") },
    ],
  },
  {
    path: "/components/tareadetalle",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("components/TareaDetalle.vue") },
    ],
  },
  {
    path: "/griddiseno",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/GridDiseno.vue") }],
  },
  {
    path: "/quasarbotones",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/QuasarBotones.vue") },
    ],
  },
  {
    path: "/conductores/perfil/abc",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/RutasParametros.vue") },
    ],
  },
  {
    path: "/quasarlistas",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/QuasarListas.vue") }],
  },
  {
    path: "/modal",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/QuasarModal.vue") }],
  },
  {
    path: "/tablas",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/QuasarTable.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
