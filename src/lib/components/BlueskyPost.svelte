<script lang="ts">
	import { renderPost, type PostData } from 'bluesky-post-embed/core';

	interface Props {
		data: PostData;
	}

	const { data }: Props = $props();

	const render = renderPost(data);
</script>

<bluesky-post src={data.thread?.post.uri}>
	{@html render}
</bluesky-post>
