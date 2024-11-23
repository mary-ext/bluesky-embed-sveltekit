<script>
	const { children } = $props();
</script>

{@render children()}

<style>
	:global(html) {
		background: #13151a;
		background-size: 224px;
		font-family: system-ui, sans-serif;
	}
</style>
