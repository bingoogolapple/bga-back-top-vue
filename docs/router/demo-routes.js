/**
 * Created by bingoogolapple on 2017/7/14.
 */
export default [
  {
    path: '',
    redirect: {
      name: 'Demo1'
    }
  },
  {
    path: 'Demo1',
    name: 'Demo1',
    component: resolve => require(['@/views/demo/Demo1.vue'], resolve)
  },
  {
    path: 'Demo2',
    name: 'Demo2',
    component: resolve => require(['@/views/demo/Demo2.vue'], resolve)
  }
]
