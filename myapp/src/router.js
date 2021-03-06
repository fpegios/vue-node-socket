import Vue from 'vue'
import Router from 'vue-router'

import Chat from '@/components/Chat'

Vue.use(Router)

export const router = new Router({
    mode: 'history',    
    routes: [
        {
            path: '/',
            name: 'Chat',
            component: Chat
        }
    ]
});