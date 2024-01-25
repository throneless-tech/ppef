import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { tags } from 'sanity-plugin-tags'
import { schemaTypes } from './schemas/schema'
import { structure } from './deskStructure'
import { media } from 'sanity-plugin-media'


export default defineConfig([
  {
    name: 'PPEF',
    title: 'PPEF Production Database',
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
    document: {
      // prev is the result from previous plugins and thus can be composed
      productionUrl: async (prev, context) => {
        // context includes the client and other details
        const { getClient, dataset, document } = context
        const client = getClient({ apiVersion: '2023-05-31' })

        if (document._type === 'page') {
          const slug = await client.fetch(
            `*[_type == 'routeInfo' && post._ref == $postId][0].slug.current`,
            { postId: document._id }
          )

          const params = new URLSearchParams()
          params.set('preview', 'true')
          params.set('dataset', dataset)

          return `https://ppefny.org/${slug}?${params}`
        }

        return prev
      },
    },
  },
  {
    name: 'PPEF-test',
    title: 'PPEF Test Database',
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
    document: {
      // prev is the result from previous plugins and thus can be composed
      productionUrl: async (prev, context) => {
        // context includes the client and other details
        const { getClient, dataset, document } = context
        const client = getClient({ apiVersion: '2023-05-31' })

        if (document._type === 'page') {
          const slug = await client.fetch(
            `*[_type == 'routeInfo' && post._ref == $postId][0].slug.current`,
            { postId: document._id }
          )

          const params = new URLSearchParams()
          params.set('preview', 'true')
          params.set('dataset', dataset)

          return `/drafts/${slug}?${params}`
        }

        return prev
      },
    },
  }
])