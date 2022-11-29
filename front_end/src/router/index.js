import Vue from 'vue';
import VueRouter from 'vue-router'
import LoginPage from '../components/login'
Vue.use(VueRouter);

const routes = [
    {
        path: "/login",
        name: "LoginPage",
        component: LoginPage,
    }
]