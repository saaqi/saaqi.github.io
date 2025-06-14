<script>
	import { SectionEducation } from '$sections';
	import { siteData } from '$data/stores.svelte.js';
</script>

<svelte:head>
	<title>My Education | {siteData.title + ' - ' + siteData.tagLine}</title>
	<meta
		name="description"
		content="Certified by Meta, Google, IBM, Packt & UC Davis in Full-Stack JavaScript, Svelte, React, Front-End, UX Design, Data Analytics, Cybersecurity & Python Automation."
	/>
</svelte:head>

<SectionEducation />
