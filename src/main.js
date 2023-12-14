import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './reset.css';
import './style.css';
import App from './App.vue';
import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import Tasks from './pages/Tasks.vue';

//----------------------------------------------------------------//
// Router
// 1. Define route components.
// These can be imported from other files
// const Home =

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/tasks', component: Tasks },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

const app = createApp(App);
app.use(router);
app.mount('#app');

