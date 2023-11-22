import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faXTwitter, faFacebook, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
library.add(faXTwitter, faFacebook, faInstagram, faGithub, faLinkedin)

createApp(App)
	.component('fa-icon', FontAwesomeIcon)
	.mount('#app')
