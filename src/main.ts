import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
async function start() {
  const app = createApp(App)
  app.use(router)
  app.use(ElementPlus)

  //     domain: 'http://127.0.0.1:7001/api/v1/report/web',
  //     add:{
  //         appId: 'kfiYSrr1668588048291'
  //     },
  //     filterUrl:["/node_modules/"],
  // });

  app.mount('#app')
}

start()
