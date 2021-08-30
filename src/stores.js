import { writable, derived } from 'svelte/store';
export const itemsInCart = writable(0);
export const cartContents = writable([]);
export const totalPrice = derived(itemsInCart, $itemsInCart => $itemsInCart * .5);