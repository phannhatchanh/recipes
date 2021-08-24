// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import homepage from './homepage'
import about from './about-page'
import meal from './meal'
import recipe from './recipe'
import section from './recipe-section'
import category from './category'
import tag from './tag'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
	// We name our schema
	name: 'default',
	// Then proceed to concatenate our document type
	// to the ones provided by any plugins that are installed
	types: schemaTypes.concat([
		/* Your types here! */
		homepage,
		meal,
		recipe,
		section,
		category,
		tag,
		about,
	]),
})