/**
 * Created by bingoogolapple on 2017/7/14.
 */
import Demo1 from '@/views/demo/Demo1.vue'
import Demo2 from '@/views/demo/Demo2.vue'

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
    component: Demo1
  },
  {
    path: 'Demo2',
    name: 'Demo2',
    component: Demo2
  }
]
