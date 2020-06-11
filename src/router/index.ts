import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './route';
import APP_UTILITIES from "@/utilities/commonFunctions";
import APP_CONST from '@/constants/AppConst';
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

export default router;
