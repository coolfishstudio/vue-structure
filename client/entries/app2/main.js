import Vue from 'vue'
import App from './App'
import router from '@/router/app2'
import store from '@/store'
import { sync } from 'vuex-router-sync'

Vue.config.productionTip = false
sync(store, router)

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
