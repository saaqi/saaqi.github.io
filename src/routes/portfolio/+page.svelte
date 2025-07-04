<script lang="ts">
	import { SectionPortfolio } from '$sections';
	import { siteData } from '$data/stores.svelte.js';
</script>

<svelte:head>
	<title>My Portfolio | {siteData.title + ' - ' + siteData.tagLine}</title>
	<meta
		name="description"
		content="View my portfolio showcasing responsive websites and mobile apps for clients like auto repair garages, LED manufacturers, grocery stores, clothing studios—built with JavaScript, Svelte, WooCommerce, React Native."
	/>
</svelte:head>

<SectionPortfolio />
