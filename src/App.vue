<style lang="less">
@import "../node_modules/uikit/src/less/uikit.less";
@import "./App.less";
@import "./assets/styles/global_styles.less";
</style>

<template>
<!-- ((roleId==6||roleId==4||roleId==5)&&'purple')|| -->
  <div
    id="app"
  >
    <h4 v-if="currentPath=='/'" @click="goToHome"><a href="javascript:void(0)">Go To Track Weather --></a></h4>
    <router-view/>
  </div>
</template>
<script>
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import "@/assets/fonts/montserrat-font.css";

import HomeComponent from "@/components/homecomponent/HomeComponent.vue";
import APP_UTILITIES from "@/utilities/commonFunctions";
import APP_CONST from "@/constants/AppConst";

UIkit.use(Icons);
export default {
  name: "App",
  components: {
    'home-comp':HomeComponent
  },
  data() {
    return {
      currentPath: '/'
    };
  },
  methods: {
   goToHome(){
     this.$router.push('/home');
   }
   
  },
  beforeCreate() {
    
  },
  watch: {
    $route() {
     this.currentPath = this.$route.path.toLowerCase();
    }
  },
  beforeMount() {
    
  }
};
</script>




