<script lang="ts">
	import { appData } from '$lib';
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
	<title>{appData.title + ' | ' + appData.tagLine}</title>
	<meta
		name="description"
		content="Full-Stack Web Developer, UI/UX Designer & Digital Strategist. Saqib Islam builds fast, sleek, SEO optimized websites and mobile apps that propel your business forward. Hire me to launch or scale your digital presence."
	/>
	<script type="application/ld+json">
		{
			"@context": "https://schema.org/",
			"@type": "LocalBusiness",
			"name": "Ikram Steel Industries & Re-Rolling Mills",
			"description": "Ikram Steel Industries & Re-Rolling Mills is the leading manufacturer of steel rebars, renowned for its high-quality steel and commitment to excellence. Specializing in the production of Grade 60 and Grade 40 steel rebars, as well as Steel CC Billets.",
			"url": "https://ikramsteel.com",
			"@id": "https://ikramsteel.com",
			"sameAs": ["https://www.facebook.com/ikramsteelindustries/"],
			"telephone": "+923218458939",
			"email": "isi@ikramsteel.com",
			"hasMap": "https://g.page/r/CX1jafAxURRtEBI",
			"openingHours": "Mo-Su 08:00-17:00",
			"priceRange": "$$",
			"logo": "https://ikramsteel.com/android-chrome-512x512.png",
			"image": "https://ikramsteel.com/android-chrome-512x512.png",
			"currenciesAccepted": "PKR",
			"paymentAccepted": "Cash, Check, Bank Transfer",
			"aggregateRating": {
				"@type": "AggregateRating",
				"ratingValue": "5",
				"bestRating": "5",
				"worstRating": "1",
				"reviewCount": "3"
			},
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "Sialkot Eminabad Road, a.k.a Deewan Road, Near Grid Station, Eminabad",
				"addressLocality": "Gujranwala",
				"addressRegion": "Punjab",
				"postalCode": "52250",
				"addressCountry": "PK"
			},
			"contactPoint": {
				"@type": "ContactPoint",
				"telephone": "+923218458939",
				"contactType": "customer service",
				"areaServed": "PK",
				"availableLanguage": "ur, pu, en"
			},
			"department": [
				{
					"@type": "LocalBusiness",
					"name": "Sales Department",
					"telephone": "+923002709399",
					"email": "saleem@ikramsteel.com",
					"priceRange": "$$",
					"image": "https://ikramsteel.com/android-chrome-512x512.png",
					"address": {
						"@type": "PostalAddress",
						"streetAddress": "Sialkot Eminabad Road, a.k.a Deewan Road, Near Grid Station, Eminabad",
						"addressLocality": "Gujranwala",
						"addressRegion": "Punjab",
						"postalCode": "52250",
						"addressCountry": "PK"
					},
					"openingHours": ["Sa-Th 8:00-18:00", "Fr 8:00-12:00"]
				}
			],
			"geo": {
				"@type": "GeoCoordinates",
				"latitude": 32.058772491082905,
				"longitude": 74.26680215767139
			}
		}
	</script>
</svelte:head>

<SectionHome />
<SectionAbout />
<SectionServices />
<SectionPortfolio />
<SectionEducation />
<SectionContact />
