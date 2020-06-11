
function lazyLoad(view: any) {
	return () => import(`@/${view}.vue`)
}

const routes = [
        {
          path: '/home',
          name: 'Home',
          component: lazyLoad('components/homecomponent/HomeComponent')
        }
     ]
   

  export default routes;