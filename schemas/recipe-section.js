export default {
	title: 'Section',
	name: 'section',
	type: 'object',
	fields: [
		{
			type: 'Title',
			name: 'title',
			type: 'string',
		},
		{
			title: 'Steps',
			name: 'steps',
			type: 'array',
			of: [
				{
					type: 'text',
					rows: 1,
				},
			],
		},
	],
}