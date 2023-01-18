<script lang="ts">
    import { _ } from 'svelte-i18n'
  </script>
  
  <svelte:head>
    <title>{$_('portfolio.page.title')}</title>
    <!-- <meta name="description" content="Svelte demo app" /> -->
  </svelte:head>
  
  
  <section class="page-section-main">
      <a class="button-active" href="portfolio/business">{$_('portfolio.nav.business')}</a>
      <a class="button-disabled" href="/portfolio">{$_('portfolio.nav.realestate')}</a>
      <a class="button-disabled" href="/portfolio">{$_('portfolio.nav.stock')}</a>
      <a class="button-disabled" href="/portfolio">{$_('portfolio.nav.crypto')}</a>
  </section>
  
  <style>
    
    .page-section-main {
      @apply grid;
      @apply grid-cols-2;
      @apply grid-rows-4; 
      @apply gap-3;
      @apply w-full;
      @apply px-7;
      @apply overflow-hidden;
      @apply bg-neutral-focus;
      @apply h-[90vh];
      @apply pt-20;
    }

    .button-active {
      @apply btn;
      @apply btn-accent;
      @apply w-full;
      @apply text-4xl;
      @apply text-accent-content;
      @apply h-[90%];
    }

    .button-disabled {
      @apply btn;
      @apply btn-accent;
      @apply w-full;
      @apply text-4xl;
      @apply btn-disabled;
      @apply bg-slate-700;
      @apply text-gray-500;
      @apply h-[90%];
    }
  </style>
  