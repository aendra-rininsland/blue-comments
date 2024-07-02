import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		lib: {
			entry: './src/lib/index.ts',
			name: 'BlueComments'
		},
		emptyOutDir: false
	},
	plugins: [
		svelte({
			compilerOptions: {
				customElement: true
			}
		})
	]
});
