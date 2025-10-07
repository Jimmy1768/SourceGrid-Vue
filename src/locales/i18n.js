// src/locales/i18n.js
import { createI18n } from 'vue-i18n'
import en from './en.json'
import hans from './hans.json'
import hant from './hant.json'

const STORAGE_KEY = 'sgl.locale'

function detectLocale() {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved) return saved

  const lang = (navigator.language || 'en').toLowerCase()
  if (lang.includes('zh')) {
    // map Chinese: hans = 简体, hant = 繁體
    if (lang.includes('hant') || lang.includes('tw') || lang.includes('hk') || lang.includes('mo')) return 'hant'
    return 'hans'
  }
  if (lang.startsWith('ko')) return 'ko'
  if (lang.startsWith('ja')) return 'ja'
  return 'en'
}

export const i18n = createI18n({
  legacy: false,
  locale: detectLocale(),
  fallbackLocale: 'en',
  messages: {
    en,
    hant,
    hans,
  }
})

// convenience helpers
export const t = (key, vars) => i18n.global.t(key, vars)
export const setLocale = (locale) => {
  i18n.global.locale.value = locale
  localStorage.setItem(STORAGE_KEY, locale)
}
export const availableLocales = [
  { code: 'en',  label: 'English' },
  { code: 'hant', label: '繁中' },
  { code: 'hans', label: '简中' },
]