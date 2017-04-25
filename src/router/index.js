
import Router from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CatView from '../views/catView.vue'
import UserView from '../views/userView.vue'
import CartView from '../views/cartView.vue'
import ActivityView from '../views/activityView.vue'
import TopicView from '../views/topicView.vue'
Vue.use(Router)

function createStoriesView (type) {
  return {
    name: `${type}-stories-view`,
    render (createElement) {
      return createElement(StoriesView, { props: { type }})
    }
  }
}
export default new Router({
  // mode: 'abstract',
  routes:[
    {path:'/home',name:'home',component:HomeView},
    {path:'/topic',name:'topic',component:TopicView},
    {path:'/cat',name:'cat',component:CatView},
    {path:'/user',name:'user',component:UserView},
    {path:'/cart',name:'cart',component:CartView},
    {path:'/activity',name:'activity',component:ActivityView},
    { path: '/', redirect: '/home' },
  ]
})

