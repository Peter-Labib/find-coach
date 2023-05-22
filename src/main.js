import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaseCard from './components/UI/BaseCard.vue'
import BaseBadge from './components/UI/BaseBadge.vue'
import BaseBtn from './components/UI/BaseBtn.vue'

const app = createApp(App)

app.use(router)
app.use(store)

app.component('BaseCard',BaseCard)
app.component('BaseBadge',BaseBadge)
app.component('BaseBtn',BaseBtn)
app.mount('#app')
