<script lang="ts">
	import { SectionAbout } from '$sections';
	import { appData } from '$lib';
</script>

<svelte:head>
	<title>About Me | {appData.title + ' - ' + appData.tagLine}</title>
	<meta
		name="description"
		content="As a Full-Stack Web Developer, UI/UX Designer, and Digital Marketing Strategist, my passion is creating powerful online presences. I focus on developing fast, beautiful, and SEO-optimized websites."
	/>
</svelte:head>

<SectionAbout />
