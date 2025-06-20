<script>
	// Destructure props
	const { email = 'saqib@saqibtech.com', key = 42, children, ...props } = $props();

	// Utility: XOR obfuscation/deobfuscation
	function xorEmail(str, key) {
		return Array.from(str)
			.map((char) => String.fromCharCode(char.charCodeAt(0) ^ key))
			.join('');
	}

	const encodedEmail = xorEmail(email, key);

	// Deobfuscate on mount
	let href = $state('/');
	const decodedEmail = xorEmail(encodedEmail, key);
	const extra = "?subject=Hi,%20Saqib%20Let's%20talk!";
	const onclick = () => (href = 'mailto:' + decodedEmail + extra);
</script>

<a {onclick} {href} {...props}>
	{@render children()}
</a>
