/**
 * Created by bingoogolapple on 2017/7/14.
 */
import demoRoutes from './demo-routes'
import AboutMe from '@/views/AboutMe.vue'
import Demo from '@/views/demo/Demo.vue'

/**
 * 路由表配置
 */
export default [
  {
    name: 'AboutMe',
    path: '/AboutMe',
    component: AboutMe
  },
  {
    name: 'Demo',
    path: '/Demo',
    component: Demo,
    children: demoRoutes
  },
  {
    path: '*',
    redirect: '/Demo'
  }
]
