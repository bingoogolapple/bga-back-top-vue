/**
 * Created by bingoogolapple on 2017/7/14.
 */
import demoRoutes from './demo-routes'

/**
 * 路由表配置
 */
export default [
  {
    name: 'AboutMe',
    path: '/AboutMe',
    component: resolve => require.ensure([], () => resolve(require('@/views/AboutMe.vue')), 'AboutMe')
  },
  {
    path: '/Demo',
    component: resolve => require.ensure([], () => resolve(require('@/views/demo/Demo.vue')), 'Demo'),
    children: demoRoutes
  },
  {
    path: '*',
    redirect: '/Demo'
  }
]
