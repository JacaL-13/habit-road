import { writable } from 'svelte/store'
import { setString, getString, clear } from '@nativescript/core/application-settings'
const Chance = require('chance')

const chance = new Chance()

// clear() //Uncomment to clear data
const storedData = getString('items')
const initialValue = storedData
	? JSON.parse(storedData)
	: [
			{
				itemId: '0e8ff199-048e-5a16-a7ff-d3b9d4e97a2b',
				title: 'test',
				created: Date.now()
			},
			{
				itemId: 'e80c25fc-3ef2-5d00-a9cb-170ad895293a',
				title: 'test1',
				created: Date.now()
			},
			{
				itemId: '4ed8e455-86a0-5398-8680-c9f1d7fe5b82',
				title: 'test2',
				created: Date.now()
			},
	  ]

export const items = writable(initialValue)


let $items: object[]
items.subscribe((data) => {
	$items = data
	setString('items', JSON.stringify(data))
})

export const subscribe = items.subscribe
export const addItem = (text: string) => {
	items.set([...$items, { itemId: chance.hash(), text, complete: false, created: Date.now() }])
}
export const updateItem = (itemId: string, property: string, newValue: any) => {
	items.update((data) => {
		const index = data.findIndex((item: any) => item.itemId === itemId)
		if (index !== -1) {
			data[index][property] = newValue
		}
		return data
	})
}
export const deleteItem = (itemId: string) => {
	items.set($items.filter((item: any) => item.itemId !== itemId))
}
