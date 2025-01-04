import { createRouter, createWebHistory } from 'vue-router';
import IndexPage from '../pages/IndexPage.vue';
import ShowsPage from '../pages/ShowsPage.vue';
import EnkelForestilling from '../pages/EnkelForestilling.vue'; 



const routes = [
  { path: '/', name: 'Index', component: IndexPage },
  { path: '/shows', name: 'Shows', component: ShowsPage },
  { path: '/forestilling/:id', component: EnkelForestilling, name: 'forestilling' }, 

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;