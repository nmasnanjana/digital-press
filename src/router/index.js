import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LatestView from "../views/LatestView.vue"
import TellYourStoriesView from "../views/TellYourStoriesView.vue"
import CategoriesView from "../views/CategoriesView.vue"
import CountriesView from "../views/CountriesView.vue"
import NotFoundView from "../views/NotFoundView.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/latest-view',
    name: 'LatestView',
    component: LatestView
  },
  {
    path: '/tell-your-stories',
    name: 'TellYourStories',
    component: TellYourStoriesView
  },
  {
    path: '/categories/:id',
    name: 'Categories',
    component: CategoriesView
  },
  {
    path: '/countries/:id',
    name: 'Countries',
    component: CountriesView,
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFoundView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
