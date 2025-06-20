<script>
	import { onMount } from 'svelte';

	// Destructure props
	const { email = 'saqib@saqibtech.com', key = 42, children, ...props } = $props();

	// Utility: XOR obfuscation/deobfuscation
	function xorEmail(str, key = 42) {
		return Array.from(str)
			.map((char) => String.fromCharCode(char.charCodeAt(0) ^ key))
			.join('');
	}

	const obfuscatedEmail = xorEmail(email, key);

	// Deobfuscate on mount
	let href = $state(obfuscatedEmail);
	onMount(() => {
		href = `mailto:${xorEmail(obfuscatedEmail, 42)}?subject=Hi,%20Saqib%20Let's%20talk!`;
	});
</script>

<a {href} {...props}>
	{@render children()}
</a>
