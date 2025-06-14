<script>
  import { SectionPortfolio } from '$sections'
  import { siteData } from '$data/stores.svelte.js'
</script>

<svelte:head>
  <title>My Portfolio | {siteData.title + ' - ' + siteData.tagLine}</title>
  <meta
  name="description"
  content="I build cross-platform mobile applications with React Native, and create robust e-commerce solutions with platforms such as WooCommerce and Shopify. My goal is to help your brand connect, convert, and ultimately, thrive in the digital landscape."
/>
</svelte:head>

<SectionPortfolio />