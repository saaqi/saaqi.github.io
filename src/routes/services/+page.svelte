<script lang="ts">
	import { appData } from '$lib';
	import { SectionServices } from '$sections';
</script>

<svelte:head>
	<title>Services I offer | {appData.title + ' - ' + appData.tagLine}</title>
	<meta
		name="description"
		content="I build cross-platform mobile applications with React Native, and create robust e-commerce solutions with platforms such as WooCommerce and Shopify. My goal is to help your brand connect, convert, and ultimately, thrive in the digital landscape."
	/>
</svelte:head>

<SectionServices />
