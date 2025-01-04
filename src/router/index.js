import { createRouter, createWebHistory } from 'vue-router';
import IndexPage from '../pages/IndexPage.vue';
import ShowsPage from '../pages/ShowsPage.vue';
import EnkelForestilling from '../pages/EnkelForestilling.vue'; 
import EventsPage from '../pages/EventsPage.vue'; 



const routes = [
  { path: '/', name: 'Index', component: IndexPage },
  { path: '/Forestillinger', name: 'Forestillinger', component: ShowsPage },
  { path: '/forestilling/:id', component: EnkelForestilling, name: 'forestilling' }, 
  { path: '/Events', name: 'Events', component: EventsPage },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;