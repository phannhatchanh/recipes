export default {
	title: 'Tag',
	name: 'tag',
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			validation: (Rule) => Rule.required(),
			options: { source: 'title' },
		},
		{
			title: 'Icon (e.g. /static/recipes/chicken.png)',
			description:
				"Use icons: baking.png, breakfast.png, chicken.png, dessert.png, drinks.png, healthy.png, hotspot.png, maincourse.png, noodle.png, pasta.png, popcorn.png, quickeasy.png, salad.png, sauce.png, snack.png, vegetable.png ",
			name: 'icon',
			type: 'string',
		},
	],
}