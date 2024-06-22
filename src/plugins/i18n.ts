import { createI18n } from 'vue-i18n'
import i18nMessages from '../i18n'

export default createI18n({
  locale: 'fa',
  fallbackLocale: 'en',
  legacy: false,
  messages: i18nMessages
})
