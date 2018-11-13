import Vue from "vue";
import Router from "vue-router";
import FrameTemp from "@/components/FrameTemp";
import BlankPage from "@/components/BlankPage";
import UserInfo from "@/views/UserInfo/UserInfo";
// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)
Vue.use(Router);
const Aroute = new Router({
  routes: [
    {
      path: "/home_menu/:page_id",
      name: "home_menu",
      component: BlankPage,
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: "/",
      name: "blank_page",
      component: BlankPage
    },
    {
      path: "/user_info",
      name: "user_info",
      component: UserInfo
    }
  ]
});
export default Aroute;
