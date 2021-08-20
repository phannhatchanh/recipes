export default {
	title: 'Recipe',
	name: 'recipe',
	type: 'document',
	fieldsets: [
		{
			title: 'Taxonomy',
			name: 'taxonomy',
		},
		{
			title: 'Info',
			name: 'info',
			options: {
				columns: 2,
			},
		},
		{
			title: 'Recipe',
			name: 'recipe',
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
			title: 'Category',
			name: 'category',
			fieldset: 'taxonomy',
			type: 'reference',
			to: [{ type: 'category' }],
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Tags',
			name: 'tags',
			fieldset: 'taxonomy',
			type: 'array',
			of: [{ type: 'reference', to: [{ type: 'tag' }] }],
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
			name: 'yield_amount',
			fieldset: 'info',
			type: 'string',
		},
		{
			title: 'Yield Type',
			name: 'yield_type',
			fieldset: 'info',
			type: 'string',
			options: {
				list: [
					{ title: 'Servings', value: 'servings' },
					{ title: 'Amount', value: 'amount' },
				],
			},
		},
		{
			title: 'Equipment',
			name: 'equipment',
			fieldset: 'recipe',
			type: 'array',
			of: [{ type: 'string' }],
		},
		{
			title: 'Ingredients',
			name: 'ingredients',
			fieldset: 'recipe',
			type: 'array',
			of: [{ type: 'string' }],
		},
		{
			title: 'Direction Sections',
			name: 'sections',
			fieldset: 'recipe',
			type: 'array',
			of: [
				{
					type: 'section',
				},
			],
		},
		{
			title: 'Notes',
			name: 'notes',
			fieldset: 'recipe',
			type: 'text',
			rows: 4,
		},
		{
			title: 'Search Terms',
			description:
				'Search terms separated by spaces. Capitalization and punctuation are automatically ignored. Recipe title, category, and tags are already indexed for search.',
			name: 'search_terms',
			type: 'string',
		},
	],
	initialValue: {
		yield_type: 'servings',
	},
}