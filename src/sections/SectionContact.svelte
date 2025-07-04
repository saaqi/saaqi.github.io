<script lang="ts">
	import icons from '$assets/icons.svg';
	import { store } from '$data/stores.svelte';
	import { SectionWrapper, ContactForm } from '$components';

	const btn = $derived(store.darkMode ? 'btn-outline-light' : 'btn-outline-primary');

	// Utility: XOR obfuscation/deobfuscation
	const email = 'saqib@saqibtech.com';
	const key = 151; // XOR key, can be any number till 255
	function xorEmail(str: string, key: number): string {
		return Array.from(str)
			.map((char) => String.fromCharCode(char.charCodeAt(0) ^ key))
			.join('');
	}
	let encodedEmail = $state(xorEmail(email, key));
	import { onMount } from 'svelte';
	onMount(() => {
		// Check if running in a real browser environment
		if (
			typeof window !== 'undefined' &&
			typeof document !== 'undefined' &&
			typeof navigator !== 'undefined' &&
			window.innerWidth > 0
		) {
			encodedEmail = xorEmail(encodedEmail, key); // Decode the email on mount
		}
	});
	const query = "?subject=Hi,%20Saqib%20Let's%20talk!";
	const emailLink = (event: Event) => {
		event.preventDefault();
		window.open('mailto:' + encodedEmail + query, '_blank');
	};
</script>

{#snippet contactList(
	href: string,
	className: string,
	icon: string,
	heading: string,
	text: string,
	clickMethod?: (event: Event) => void
)}
	<!-- { .nav-text-decoration-none : "keeps from purging"} -->
	<a
		{href}
		class={className}
		class:text-decoration-none={true}
		{...clickMethod ? { onclick: clickMethod } : ''}
		target="_blank"
		rel="nofollow noopener noreferrer"
	>
		<div class="icon-container btn {btn} rounded-circle p-3 me-3 fs-3">
			<svg class="icon {icon}">
				<use xlink:href={icons + '#' + icon}></use>
			</svg>
		</div>
		<div class="text-heading h4">{heading}</div>
		<div class="text-body">{text}</div>
	</a>
{/snippet}

<SectionWrapper id="contact" title="Contact Me" icon="address-book-icon">
	<div class="container">
		<p class="section-copy mb-5">
			I would love to hear from you! If you have any questions, project inquiries, or just want to
			say hello, please don't hesitate to reach out. I look forward to connecting with you!
		</p>

		<div class="row mt-4">
			<div class="col-lg-4 col-12 d-flex flex-column gap-4 gap-lg-5">
				{@render contactList(
					// contactList(href, className, icon, heading, text, method)
					'/',
					'emailBlock',
					'email-icon',
					'Email',
					encodedEmail,
					emailLink
				)}
				{@render contactList(
					// contactList(href, className, icon, heading, text, method)
					'https://wa.me/+923006412193',
					'whatsAppBlock',
					'email-icon',
					'WhatsApp',
					'+92 300 6412193'
				)}
				{@render contactList(
					// contactList(href, className, icon, heading, text, method)
					'tel:+923006412193',
					'phoneBlock',
					'phone-icon',
					'Call',
					'+92 300 6412193'
				)}
			</div>
			<div class="col-lg-8 col-12 mt-5 mt-lg-0">
				<ContactForm />
			</div>
		</div>
	</div>
</SectionWrapper>

<style lang="scss">
	.icon-container {
		float: left;
		display: flex;
	}
	.text-heading {
		color: var(--bs-body-color);
		padding: 0 0 0 60px;
		font-size: 22px;
		font-weight: 700;
		margin-bottom: 5px;
	}
	.emailBlock {
		all: unset;
		cursor: pointer;
	}
	.emailBlock:focus {
		outline: revert;
	}
</style>
