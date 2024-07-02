<svelte:options customElement="blue-comments" />

<script lang="ts">
	import { BskyAgent } from '@atproto/api';
	import { AppBskyFeedDefs } from '@atproto/api';
	import Reply from './reply.svelte';
	export let uri: string | null = null;

	const agent = new BskyAgent({ service: 'https://public.api.bsky.app' });

	let req: Promise<any> | null = null;

	if (uri) {
		req = agent.getPostThread({ uri });
	}
</script>

<section class="blue-comments text-center" data-blue-comments>
	{#await req then response}
		{#if response?.data?.thread && AppBskyFeedDefs.isThreadViewPost(response.data.thread)}
			<slot><h3 class="text-xl">Comments</h3></slot>
			{#if response.data.thread.replies}
				{#each response.data.thread.replies as reply}
					<Reply reply={reply.post} />
				{/each}
			{:else}<p class="text-center">No comments yet</p>
			{/if}
		{:else}<p class="text-center">Could not find thread</p>{/if}
	{/await}
</section>

<style>
	.text-center {
		margin: 0 auto;
	}
</style>
