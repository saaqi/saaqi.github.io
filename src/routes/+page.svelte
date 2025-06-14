<script>
	import { siteData } from '$data/stores.svelte.js';
	import {
		SectionHome,
		SectionAbout,
		SectionServices,
		SectionPortfolio,
		SectionEducation,
		SectionContact
	} from '$sections';
</script>

<svelte:head>
	<title>{siteData.title + ' | ' + siteData.tagLine}</title>
	<meta
		name="description"
		content="Full-Stack Web Developer, UI/UX Designer & Digital Strategist. Saqib Islam builds fast, sleek, SEO optimized websites and mobile apps that propel your business forward. Hire me to launch or scale your digital presence."
	/>
</svelte:head>

<SectionHome />
<SectionAbout />
<SectionServices />
<SectionPortfolio />
<SectionEducation />
<SectionContact />
