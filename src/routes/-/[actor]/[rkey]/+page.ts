import { fetchPost } from 'bluesky-embed/post/core';

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const uri = `at://${params.actor}/app.bsky.feed.post/${params.rkey}`;
	const data = await fetchPost({ uri });

	return { post: data };
};
