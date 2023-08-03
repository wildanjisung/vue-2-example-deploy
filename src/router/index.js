import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SettingView from '../views/SettingView.vue'
import DefaultView from '../views/DefaultView.vue'
import PrivacyView from '../views/PrivacyView.vue'
import DefaultLayoutView from '../layout/DefaultLayout.vue'
import UserView from '../views/UserView.vue'
import UserDetailView from '../views/UserDetailView.vue'
import PokemonView from '../views/PokemonView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: DefaultLayoutView,
    children: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      },
      {
        path: '/setting',
        name: 'setting',
        component: DefaultView,
        children: [
          {
            path: "",
            name: "Setting",
            component: SettingView
          },
          {
            path: "privacy",
            name: "Privacy",
            component: PrivacyView
          },
        ]
      },
      {
        path: "/user",
        component: DefaultView,
        children: [
          {
            path: "",
            name: "User",
            component: UserView,
          },
          {
            path: ":id",
            name: "User Detail",
            component: UserDetailView,
          },
        ],
      },
      {
        path: '/pokemon',
        name: 'Pokemon',
        component: PokemonView
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
