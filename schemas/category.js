export default {
	title: 'Category',
	name: 'category',
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
			title: 'Emoji',
			description:
				"This can't automatically be checked to be an emoji, but it should be one.",
			name: 'emoji',
			type: 'string',
			validation: (Rule) => Rule.required().max(3),
		},
	],
}