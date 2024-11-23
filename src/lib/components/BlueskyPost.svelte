<script lang="ts">
	import '$lib/styles/bluesky.css';

	import { renderPost, type PostData } from 'bluesky-embed/post/core';

	interface Props {
		data: PostData;
	}

	const { data }: Props = $props();

	const render = renderPost(data);
</script>

<bluesky-post src={data.thread?.post.uri}>
	{@html render}
</bluesky-post>
