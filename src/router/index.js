import Vue from 'vue'
import VueRouter from 'vue-router'
import Home_page from "../views/Home_page.vue";
import Enregistrement_page from "@/views/Enregistrement_page";


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Home_page',
    component: Home_page
  },
  {
    path: '/Enregistrement',
    name:'Enregistrement_page',
    component: Enregistrement_page
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
