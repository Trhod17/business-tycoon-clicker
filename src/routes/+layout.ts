import { browser } from '$app/environment'
import '$lib/i18n' // Import to initialize. Important :)
import { locale, waitLocale } from 'svelte-i18n'
import type { LayoutData } from '../../.svelte-kit/types/src/routes/$types';

export const load: LayoutData = async () => {
	if (browser) {
		locale.set(window.navigator.language)
	}
	await waitLocale()
}