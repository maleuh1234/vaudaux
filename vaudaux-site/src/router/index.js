import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import CreationView from '../views/CreationView.vue'
import PresentationView from '../views/PresentationView.vue'
import ProductView from '../views/Produit.vue'
import LegalView from '../views/Legal.vue'
import ValuesView from '../views/ValuesView.vue'
import HistoryView from '../views/HistoryView.vue'
import SavoirFaireView from '../views/SavoirFaireView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/presentation',
    name: 'presentation',
    component: PresentationView
  },
  {
    path: '/creations',
    name: 'creations',
    component: CreationView
  },
  {
    path: '/legal',
    name: 'legal',
    component: LegalView
  },
  {
    path: '/values',
    name: 'values',
    component: ValuesView
  },
  {
    path: '/history',
    name: 'history',
    component: HistoryView
  },
  {
    path: '/knowHow',
    name: 'Know-how',
    component: SavoirFaireView
  },
  {
    path: '/creations/:id',
    name: 'product',
    component: ProductView,
    props: true,
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
