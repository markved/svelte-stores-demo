<script>
	let inventory = ["computer", "tablet", "pen", "mouse", "tv"];
	import { itemsInCart, totalPrice, cartContents } from "./stores.js";
	import Item from "./Item.svelte";
</script>

<main>
	<div class="items">
		{#each inventory as item}
			<Item {item} />
		{/each}
	</div>

	<p>There are {$itemsInCart} items in your cart.</p>
	<p>Cart total: ${$totalPrice}</p>
	<p>Cart contents:</p>

	<ol>
		{#each $cartContents as item}
			<li>{item}</li>
		{/each}
	</ol>
</main>

<style>
	.items {
		display: flex;
		flex-direction: row;
	}
</style>
