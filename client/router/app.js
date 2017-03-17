import Vue from 'vue'
import Router from 'vue-router'
import { Test } from '@/pages/app'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Test',
            component: Test
        }
    ]
})
