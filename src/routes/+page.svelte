<script>
	import { siteData } from '$data/stores.svelte.js'
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
		content="Saqib Islam is a Full-Stack Web Developer, UI/UX Designer & Digital Strategist crafting fast, sleek, SEO-optimized websites that convert and grow brands."
	/>
</svelte:head>

<SectionHome />
<SectionAbout />
<SectionServices />
<SectionPortfolio />
<SectionEducation />
<SectionContact />
