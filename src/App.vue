<template>
  <header class="site-header">
    <h1>{{ t('site.title') }}</h1>
    <p>{{ t('site.tagline') }}</p>
  </header>

  <!-- Language selector bar under the banner -->
  <div class="container" style="margin-top:1rem;">
    <div class="flex gap-2">
      <button
        v-for="opt in availableLocales"
        :key="opt.code"
        class="btn btn--ghost btn--sm"
        :disabled="locale === opt.code"
        @click="setLocale(opt.code)"
      >
        {{ opt.label }}
      </button>
    </div>
  </div>

  <main class="container">
    <!-- Intro -->
    <section class="section">
      <p>{{ t('intro.p1') }}</p>
      <p>{{ t('intro.p2') }}</p>

      <div class="mt-3">
        <span class="badge badge--primary">{{ t('intro.badges.rails_sidekiq') }}</span>
        <span class="badge badge--success">{{ t('intro.badges.automation') }}</span>
        <span class="badge badge--neutral">{{ t('intro.badges.infrastructure') }}</span>
      </div>
    </section>

    <!-- What We Offer -->
    <section class="section">
      <h2>{{ t('offer.title') }}</h2>
      <ul>
        <li>{{ t('offer.items.simple') }}</li>
        <li>{{ t('offer.items.no_accounts') }}</li>
        <li>{{ t('offer.items.backend') }}</li>
        <li>{{ t('offer.items.pricing') }}</li>
      </ul>
    </section>

    <!-- Portfolio -->
    <section class="section">
      <h2>{{ t('work.title') }}</h2>
      <div class="grid-portfolio">
        <a class="tile" href="https://spot.com.tw" target="_blank" rel="noopener">
          <img class="tile__img" src="/images/spot.png" alt="The Spot" />
          <div class="tile__caption">{{ t('work.spot') }}</div>
        </a>
        <a class="tile" href="https://dojomateapp.com" target="_blank" rel="noopener">
          <img class="tile__img" src="/images/dojomate.png" alt="DojoMate App" />
          <div class="tile__caption">{{ t('work.dojomate') }}</div>
        </a>
        <a class="tile" href="https://sourcecombatives.com" target="_blank" rel="noopener">
          <img class="tile__img" src="/images/combatives.png" alt="Source Combatives" />
          <div class="tile__caption">{{ t('work.combatives') }}</div>
        </a>
      </div>
    </section>

    <!-- Contact -->
    <section class="section">
      <p v-html="t('contact.p', { email: '<a href=&quot;mailto:admin@sourcecombatives.com&quot;>admin@sourcecombatives.com</a>' })"></p>
    </section>
  </main>

  <footer class="site-footer">
    <small>&copy; {{ new Date().getFullYear() }} {{ t('site.copyright') }}</small>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { t, setLocale, i18n, availableLocales } from './locales/i18n'

const locale = computed(() => i18n.global.locale.value)
</script>