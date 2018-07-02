import { sync } from 'vuex-router-sync'
import store from '~/store'
import router from '~/router'

const unsync = sync(store, router, { moduleName: 'route' })
