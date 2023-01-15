import { createRouter, createWebHashHistory } from "vue-router";
import example1 from '../pages/example1.vue'
import designer from '../pages/designer.vue'

const routes = [
  {
    path: "/example1",
    component: example1,
  },
  {
    path:"/example2",
    component:designer
  }

];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
