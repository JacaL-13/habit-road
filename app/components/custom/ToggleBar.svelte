<script>
	import { View } from "@nativescript/core";
	import { screen } from "@nativescript/core/platform";
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher()

	export let margin = '10 20'
	export let height = 34;
	export let labels = ["one", "two", "three"];

	let columns = "";
	for (let i = 0; i < labels.length; i++) {
		columns += "*,";
	}

	let toggle;
	let indicator;
	export let selectedIndex = 0;

	function hdlTap(newCol) {
		const moveCols = newCol - selectedIndex
		const translation =
			((toggle.nativeView.getMeasuredWidth()) /
				screen.mainScreen.scale /
				labels.length) *
			moveCols;
		indicator.nativeView.animate({
			translate: {
				x: translation,
				y: 0,
			},
			duration: 50,
		});
		setTimeout(() => {
			selectedIndex = newCol;
			indicator.nativeView.translateX = 0;
		}, 150);
	}
</script>

<page {margin} {height}>
	<gridLayout bind:this={toggle} class="toggle" {height} {columns}>
		<label
			col={selectedIndex}
			bind:this={indicator}
			id="indicator"
			height={height - 4}
		/>

		{#each labels as label, index}
			<label
				col={index}
				class="toggle-lbl text-center"
				on:tap={() => hdlTap(index)}>{label}</label
			>
		{/each}
	</gridLayout>
</page>

<style>
	.toggle {
		border-width: 1;
		border-color: rgb(108, 107, 107);
		background-color: rgb(240, 240, 240);
		border-radius: 50%;
	}

	#indicator {
		border-width: 1;
		border-color: rgb(108, 107, 107);
		background-color: white;
		margin: 0 1;
		border-radius: 50%;
	}
</style>
