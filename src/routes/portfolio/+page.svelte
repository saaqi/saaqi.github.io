<script lang="ts">
	import { SectionPortfolio } from '$sections';
	import { appData } from '$lib';
</script>

<svelte:head>
	<title>My Portfolio | {appData.title + ' - ' + appData.tagLine}</title>
	<meta
		name="description"
		content="View my portfolio showcasing responsive websites and mobile apps for clients like auto repair garages, LED manufacturers, grocery stores, clothing studios—built with JavaScript, Svelte, WooCommerce, React Native."
	/>
</svelte:head>

<SectionPortfolio />
