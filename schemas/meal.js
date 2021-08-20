export default {
	title: 'Meal',
	name: 'meal',
	type: 'document',
	fieldsets: [
		{
			title: 'Info',
			name: 'info',
			options: {
				columns: 2,
			},
		},
	],
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
			title: 'Description',
			description:
				"If needed at all, this should be short and sweet. Remember our commitment: no storytime recipes, just down-to-brass-tacks good cookin'.",
			name: 'description',
			type: 'text',
			rows: 4,
		},
		{
			title: 'Prep Time',
			description: 'Time to prep in minutes',
			name: 'prep_time',
			fieldset: 'info',
			type: 'number',
			validation: (Rule) => Rule.integer().positive(),
		},
		{
			title: 'Cook Time',
			description: 'Time to cook in minutes',
			name: 'cook_time',
			fieldset: 'info',
			type: 'number',
			validation: (Rule) => Rule.integer().positive(),
		},
		{
			title: 'Yield Amount',
			description: 'Should be serving size, e.g. "Serves 4-6"',
			name: 'yield_amount',
			fieldset: 'info',
			type: 'string',
		},
		{
			title: 'Recipes',
			name: 'recipes',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'recipe' }],
				},
			],
		},
		{
			title: 'Direction Sections',
			name: 'sections',
			type: 'array',
			of: [
				{
					type: 'section',
				},
			],
		},
	],
}