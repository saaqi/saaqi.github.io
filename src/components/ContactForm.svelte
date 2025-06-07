<script>
	import { slide } from 'svelte/transition';

	import icons from '$assets/icons.svg';
	import { store } from '$data/stores.svelte.js';

	let name = $state('');
	let email = $state('');
	let subject = $state('');
	let message = $state('');

	let disableSubmit = $state(true);
	let emailValid = $state(false);
	let mailtoUrl = '';
	const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

	$effect(() => {
		const fallbackSubject = `[Contact-Form] ${name}`;
		emailValid = email !== '' && emailRegex.test(email);
		disableSubmit = !(name !== '' && emailValid && message !== '');
		mailtoUrl =
			`mailto:${email}?subject=${encodeURIComponent(subject || fallbackSubject)}&` +
			`body=${encodeURIComponent(message)}`;
	});

	const btn = $derived.by(() => {
		switch (true) {
			case disableSubmit && store.darkMode:
				return 'btn-outline-light';
			case disableSubmit && !store.darkMode:
				return 'btn-outline-primary';
			case !disableSubmit && store.darkMode:
				return 'btn-light';
			default:
				return 'btn-primary';
		}
	});

	const alert = $derived(store.darkMode ? 'alert-warning' : 'alert-danger');

	const onclick = (e) => {
		e.preventDefault();
		if (!disableSubmit) window.open(mailtoUrl, '_blank');
	};
</script>

<form id="contact-email-form" class="contact-email-form">
	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<label for="contact-form-name">
					<svg class="icon user-icon small">
						<use xlink:href={icons + '#user-icon'}></use>
					</svg>
					Name:
				</label>
				<input
					bind:value={name}
					type="text"
					name="contact-form-name"
					class="form-control"
					id="contact-form-name"
					placeholder="Enter Your Full Name *"
					required
				/>
			</div>
			<div class="col-md-6 mt-3 mt-md-0">
				<label for="contact-form-email">
					<svg class="icon email-icon small" style="--icon-fill: var(--bs-body-color)">
						<use xlink:href={icons + '#email-icon'}></use>
					</svg>
					Email Address:
				</label>
				<input
					bind:value={email}
					type="email"
					class="form-control"
					name="contact-form-email"
					id="contact-form-email"
					placeholder="Enter Your Email *"
					required
				/>
				{#if !emailValid && email}
					<div class="alert {alert} mt-3 mb-0" role="alert" transition:slide={{duration: 100}}>
						Please enter a Valid E-Mail Address to continue.
					</div>
				{/if}
			</div>
		</div>
		<div class="mt-3">
			<label for="contact-form-subject">
				<svg class="icon subject-icon small">
					<use xlink:href={icons + '#subject-icon'}></use>
				</svg>
				Subject:
			</label>
			<input
				bind:value={subject}
				type="text"
				class="form-control"
				name="contact-form-subject"
				id="contact-form-subject"
				placeholder="Enter The subject"
			/>
		</div>
		<div class="mt-3">
			<label for="contact-form-message">
				<svg class="icon message-icon small">
					<use xlink:href={icons + '#message-icon'}></use>
				</svg>
				Message:
			</label>
			<textarea
				bind:value={message}
				class="form-control"
				name="contact-form-message"
				id="contact-form-message"
				rows="5"
				placeholder="What is on your mind? *"
				required
			></textarea>
		</div>
		<div class="text-end text-md-start mt-4">
			<button
				{onclick}
				type="submit"
				class="btn {btn}"
				disabled={disableSubmit}
				aria-disabled={disableSubmit}
			>
				<svg class="icon email-icon">
					<use xlink:href={icons + '#email-icon'}></use>
				</svg>
				Send Message
			</button>
		</div>
	</div>
</form>

<style>
	svg.icon {
		--icon-fill: var(--bs-btn-color);
		fill: var(--icon-fill);
	}
	.form-control {
		border-color: var(--bs-dark-border-subtle);
	}

	.form-control:focus {
		border-color: var(--bs-dark-border);
		box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.2);
		transition: var(--transition);
	}

	.btn:disabled {
		box-shadow: none;
	}

	.btn:disabled:hover {
		cursor: not-allowed;
	}
</style>
