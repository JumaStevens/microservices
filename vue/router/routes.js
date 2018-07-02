import IndexView from '~/views/IndexView.vue'
import AuthView from '~/views/AuthView.vue'
import AccountView from '~/views/AccountView.vue'

export const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexView
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthView
  },
  {
    path: '/account',
    name: 'account',
    component: AccountView
  }
]
