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
	],
}