//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import movieDetails from './MovieDetails.vue'
import KeywordResults from './KeywordResults.vue'
import movieHome from './components/movieHome.vue'
import router from './router/routerInstance.js'

createApp(App)
    .use(router)
    .mount('#app')
