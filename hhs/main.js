import Vue from 'vue'
import App from './App.vue'

// 路由文件引入
import router from './router'

// elementui组件引入
import './plugins/element.js'

// 样式文件
import './assets/css/global.css'
import './assets/css/style.css'
import './assets/elementuiIcon/iconfont.css'
import 'windi.css'

// 随机转盘插件
import VueLuckyCanvas from '@lucky-canvas/vue'
Vue.use(VueLuckyCanvas)


new Vue({ 
  router,
  render: h => h(App)
}).$mount('#app')
 
