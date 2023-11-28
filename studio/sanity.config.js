import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { tags } from 'sanity-plugin-tags'
import { schemaTypes } from './schemas/schema'
import { structure } from './deskStructure'
import { media } from 'sanity-plugin-media'


export default defineConfig([
  {
    name: 'PPEF',
    title: 'Public Policy and Education Fund of New York',
    projectId: "n0k318sj",
    dataset: "production",
    basePath: '/production',
    plugins: [
      deskTool({ structure }),
      media(),
      tags({}),
      // visionTool(),
    ],
    schema: {
      types: schemaTypes,
    },
  },
  {
    name: 'PPEF-test',
    title: 'Sandbox - PPEF',
    projectId: "n0k318sj",
    dataset: "test",
    basePath: '/test',
    plugins: [
      deskTool({ structure }),
      media(),
      tags({}),
      // visionTool(),
    ],
    schema: {
      types: schemaTypes,
    },
  }
])