<script lang="ts">
	import { SectionContact } from '$sections';
	import { appData } from '$lib';
</script>

<svelte:head>
	<title>Contact Me! | {appData.title + ' - ' + appData.tagLine}</title>
	<meta
		name="description"
		content="Let's connect! Get in touch with Saqib Islam for project inquiries, questions, or to discuss how I can help grow your web presence and digital marketing. Email, WhatsApp & phone available."
	/>
</svelte:head>

<SectionContact />
