<script>
	import icons from '$assets/icons.svg';
	import { SectionWrapper, ContactForm, ObfuscatedEmail } from '$components';
	import { store } from '$data/stores.svelte.js';
	const btn = $derived(store.darkMode ? 'btn-outline-light' : 'btn-outline-primary');
</script>

<SectionWrapper id="contact" title="Contact Me" icon="address-book-icon">
	<div class="container">
		<p class="section-copy mb-5">
			I would love to hear from you! If you have any questions, project inquiries, or just want to
			say hello, please don't hesitate to reach out. I look forward to connecting with you!
		</p>

		<div class="row mt-4">
			<div class="contactList col-lg-3 info d-flex flex-column gap-4 gap-lg-5">
				<ObfuscatedEmail
					key="179"
					class="text-decoration-none"
					target="_blank"
					rel="nofollow noopener noreferrer"
				>
					<div class="icon-container btn {btn} rounded-circle p-3 me-3 fs-3">
						<svg class="icon email-icon">
							<use xlink:href={icons + '#email-icon'}></use>
						</svg>
					</div>
					<div class="h4 text-heading">Email</div>
					<div class="text-body">saqib@saqibtech.com</div>
				</ObfuscatedEmail>
				<a
					href="https://wa.me/+923006412193"
					class="text-decoration-none"
					rel="nofollow noopener noreferrer"
					target="_blank"
				>
					<div class="icon-container btn {btn} rounded-circle p-3 me-3 fs-3">
						<svg class="icon whatsapp-icon">
							<use xlink:href={icons + '#whatsapp-icon'}></use>
						</svg>
					</div>
					<div class="h4 text-heading">WhatsApp</div>
					<div class="text-body">+92 300 6412193</div>
				</a>
				<a href="tel:+923006412193" class="text-decoration-none">
					<div class="icon-container btn {btn} rounded-circle p-3 me-3 fs-3">
						<svg class="icon phone-icon">
							<use xlink:href={icons + '#phone-icon'}></use>
						</svg>
					</div>
					<div class="h4 text-heading">Call</div>
					<div class="text-body">+92 300 6412193</div>
				</a>
			</div>

			<div class="col-lg-9 col-12 mt-5 mt-lg-0">
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
</style>
