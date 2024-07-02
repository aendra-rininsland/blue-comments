<script lang="ts">
	export let reply: any = null;
</script>

{#if reply?.author}
	<div class="grid p-6 place-items-center">
		<div class="w-full">
			<div class="flex flex-row items-center">
				<img src={reply.author.avatar} alt={reply.author.handle} class="h-12 w-12 rounded-full" />
				<div class="ml-4">
					<p class="text-lg text-left font-medium">{reply.author.displayName}</p>
					<p>@{reply.author.handle}</p>
				</div>
			</div>
			<div class="mt-4">
				<p class="text-left">{reply.record.text}</p>
			</div>
		</div>
	</div>
{/if}

<style>
	@import '../app.css';
</style>
