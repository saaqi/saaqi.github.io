<script lang="ts">
	import { SectionContact } from '$sections';
	import { siteData } from '$data/stores.svelte.js';
</script>

<svelte:head>
	<title>Contact Me! | {siteData.title + ' - ' + siteData.tagLine}</title>
	<meta
		name="description"
		content="Let's connect! Get in touch with Saqib Islam for project inquiries, questions, or to discuss how I can help grow your web presence and digital marketing. Email, WhatsApp & phone available."
	/>
</svelte:head>

<SectionContact />
