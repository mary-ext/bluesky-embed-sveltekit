<script lang="ts">
	import BlueskyPost from '$lib/components/BlueskyPost.svelte';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<main>
	<h1>Statically generated Bluesky post embeds</h1>
	<p>See <a href="https://github.com/mary-ext/bluesky-embed">repository</a> for details.</p>

	<BlueskyPost data={data.post} />
</main>

<style>
	main {
		margin: auto;
		padding: 1rem;
		width: 550px;
		max-width: calc(100% - 2rem);
		color: white;
	}
	h1 {
		margin-bottom: 1em;
		font-weight: 700;
		font-size: 1.25rem;
		line-height: 1;
		text-align: center;
	}
	p {
		margin-bottom: 1em;
		font-size: 15px;
		line-height: 1;
	}
	a {
		color: #60a5fa;
	}
</style>
