// src/main.js
import './assets/styles/variables.css';
import './assets/styles/base.css';
import './assets/styles/components.css';
import './assets/styles/utilities.css';

import { createApp } from 'vue'
import App from './App.vue'
import { i18n } from './locales/i18n'

// ✅ attach i18n before mounting
createApp(App)
  .use(i18n)
  .mount('#app')
