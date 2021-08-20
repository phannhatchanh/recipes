export default {
	title: 'Homepage',
	name: 'homepage',
	type: 'document',
	fields: [
		{
			title: 'Headline',
			name: 'headline',
			type: 'string',
		},
		{
			title: 'Featured Meal',
			name: 'featured_meal',
			type: 'reference',
			to: [{ type: 'meal' }],
		},
	],
}