<script lang="ts">
	import { SectionEducation } from '$sections';
	import { appData } from '$lib';
</script>

<svelte:head>
	<title>My Education | {appData.title + ' - ' + appData.tagLine}</title>
	<meta
		name="description"
		content="Certified by Meta, Google, IBM, Packt & UC Davis in Full-Stack JavaScript, Svelte, React, Front-End, UX Design, Data Analytics, Cybersecurity & Python Automation."
	/>
</svelte:head>

<SectionEducation />
