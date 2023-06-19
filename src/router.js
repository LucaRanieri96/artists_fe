import { createRouter, createWebHistory } from "vue-router";
import Home from "./view/Home.vue";
import Contacts from "./view/Contacts.vue";
import About from "./view/About.vue";


const router = createRouter({
  history:createWebHistory(),
  routes: [{
    'path': '/',
    'name': 'home',
    'component': Home,
  },
  {
    'path': '/about',
    'name': 'about',
    'component': About,
  },
  {
    'path': '/contacts',
    'name': 'contacts',
    'component': Contacts,
  }
  ]
})

export {router};