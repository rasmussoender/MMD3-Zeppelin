
import { createRouter, createWebHistory } from 'vue-router';
import IndexPage from '../pages/IndexPage.vue';
import ShowsPage from '../pages/ShowsPage.vue';
import SingularShowPage from '../pages/SingularShowPage.vue';
import EventsPage from '../pages/EventsPage.vue';
import SingularEventPage from '../pages/SingularEventPage.vue';
import ChoirPage from '../pages/ChoirPage.vue'; 
import VisitorInfoPage from '../pages/VisitorInfoPage.vue'; 
import FamilyPage from '../pages/FamilyPage.vue'; 
import SchoolsPage from '../pages/SchoolsPage.vue'; 
import WorkshopsPage from '../pages/WorkshopsPage.vue'; 
import EducationalMaterialPage from '../pages/EducationalMaterialPage.vue'; 
import ArticlesPodcastsPage from '../pages/ArticlesPodcastsPage.vue'; 
import AboutUsPage from '../pages/AboutUsPage.vue'; 

const routes = [
  { path: '/', name: 'Index', component: IndexPage },
  { path: '/forestillinger', name: 'forestillinger', component: ShowsPage },
  { path: '/forestilling/:id', name: 'forestilling', component: SingularShowPage },
  { path: '/events', name: 'events', component: EventsPage },
  { path: '/event/:id', name: 'event', component: SingularEventPage },
  { path: '/kor', name: 'kor', component: ChoirPage },
  { path: '/informationBesogende', name: 'informationBesogende', component: VisitorInfoPage },
  { path: '/familier', name: 'familier', component: FamilyPage },
  { path: '/skolerInstitutioner', name: 'skolerInstitutioner', component: SchoolsPage },
  { path: '/workshops', name: 'workshops', component: WorkshopsPage },
  { path: '/undervisningsmateriale', name: 'undervisningsmateriale', component: EducationalMaterialPage },
  { path: '/artiklerPodcasts', name: 'artiklerPodcasts', component: ArticlesPodcastsPage },
  { path: '/omOs', name: 'omOs', component: AboutUsPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

