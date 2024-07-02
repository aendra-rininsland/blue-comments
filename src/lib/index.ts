// Reexport your entry components here
export { default as BlueComments } from './comments.svelte';
import BlueComments from './comments.svelte';

customElements.define('blue-comments', BlueComments.element);
