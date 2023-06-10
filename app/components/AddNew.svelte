<script>
	import ToggleBar from "./custom/ToggleBar.svelte";

	import { goBack } from "svelte-native";
	let incrRedu = 0;
	let freqDurCount = 0;
</script>

<page>
	<actionBar title="Add New">
		<navigationButton on:tap={goBack}>Go back</navigationButton>
	</actionBar>
	<stackLayout margin="25 0">
		<ToggleBar
			bind:selectedIndex={incrRedu}
			labels={["Increase", "Reduce"]}
		/>
		<ToggleBar
			bind:selectedIndex={freqDurCount}
			labels={["Frequency", "Duration", "Count"]}
		/>
		<label>{freqDurCount < 2 ? "Initial Timer" : "Initial Count"}</label>
	</stackLayout>
</page>

<style>
	label {
		text-align: center;
	}
</style>
