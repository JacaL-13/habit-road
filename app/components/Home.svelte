<script>
	import { navigate, showModal } from "svelte-native";
	import { Template } from "svelte-native/components";

	import { items } from "~/store/items";

	import AddNew from "./AddNew.svelte";
	import ToggleBar from "./custom/ToggleBar.svelte";

	function hdlAddNew() {
		navigate({ page: AddNew });
	}

	let selectedIndex;
</script>

<page>
	<actionBar title="Habit Road 🚗" />

	<flexboxLayout flexDirection="column" justifyContent="space-between">
		<listView separatorColor="transparent" items={$items}>
			<Template let:item>
				<flexboxLayout height="26" justifyContent="space-between">
					<label>{item.title}</label>
					<flexboxLayout alignItems="center">
						<button></button>
					</flexboxLayout>
				</flexboxLayout>
			</Template>
		</listView>
		<button on:tap={hdlAddNew}>Add New ➕</button>
	</flexboxLayout>
	<!-- <stackLayout>
		<label>{selectedIndex}</label>
		<ToggleBar
			bind:selectedIndex
			labels={["one", "two", "three", "four"]}
		/>
	</stackLayout> -->
</page>

<style>
	button {
		margin: 0;
	}
</style>
