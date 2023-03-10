import { CollectionConfig } from 'payload/types';
import { CodeGist } from '../blocks/CodeGist';
import Content from '../blocks/Content';
import { Media } from '../blocks/Media';
import MediaContent from '../blocks/MediaContent';
import MediaSlider from '../blocks/MediaSlider';
import slug from '../fields/slug';

const Posts: CollectionConfig = {
  // the slug is used for naming the collection in the database and the APIs that are open. For example: api/posts/${id}
  slug: 'posts',
  admin: {
    // this is the name of a field which will be visible for the edit screen and is also used for relationship fields
    useAsTitle: 'title',
    // defaultColumns is used on the listing screen in the admin UI for the collection
    defaultColumns: ['title', 'category', 'publishDate', 'tags', 'status'],
    group: 'Content',
  },
  endpoints: [
    {
      path: '/slug/:slug',
      method: 'get',
      handler: async (req, res, next) => {
        const { slug } = req.params;

        const { find } = req.payload;

        // use the slug to find the document
        const document = await find({
          collection: 'posts',
          // filter by the slug
          where: {
            and: [
              {
                slug: {
                  equals: slug,
                },
              },
            ],
          },
          limit: 1,
        });

        if (!document) {
          return res.status(404).json({
            data: null,
            errors: [
              {
                message: 'No Post Found With That Slug',
              },
            ],
          });
        }

        return res.json({
          data: document,
          errors: [],
        });
      },
    },
  ],
  access: {
    read: ({ req: { user } }) => {
      // users who are authenticated will see all posts
      if (user) {
        return true;
      }

      // query publishDate to control when posts are visible to guests
      return {
        and: [
          {
            publishDate: {
              less_than: new Date().toJSON(),
            },
            _status: {
              equals: 'published',
            },
          },
        ],
      };
    },
  },
  // versioning with drafts enabled tells Payload to save documents to a separate collection in the database and allow publishing
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      // localized fields are stored as keyed objects to represent each locale listed in the payload.config.ts. For example: { en: 'English', es: 'Espanol', ...etc }
      localized: true,
    },
    slug(),
    {
      name: 'settings',
      type: 'group',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'category',
              type: 'relationship',
              relationTo: 'categories',
              // limit the options using the below query which uses the "archive" field set in the categories collection
              filterOptions: {
                archived: { equals: false },
              },
              // allow selection of one or more categories
              hasMany: true,
            },
            {
              name: 'tags',
              type: 'relationship',
              relationTo: 'tags',
              // limit the options using the below query which uses the "archive" field set in the tags collection
              filterOptions: {
                archived: { equals: false },
              },
              hasMany: true, // this is useful for when you want to limit the options to only tags that are not already assigned to the document
            },
          ],
        },
        {
          name: 'heroImage',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'This image will be used as the hero image',
          },
        },
      ],
    },
    {
      name: 'layout',
      label: 'Page Layout',
      type: 'blocks',
      minRows: 1,
      // the blocks are reusable objects that will be added in array to the document, these are especially useful for structuring content purpose built for frontend componentry
      blocks: [Content, Media, MediaContent, MediaSlider, CodeGist],
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      access: {
        read: () => true,
      },
      // defaultValues can use functions to return data to populate the create form and also when making POST requests the server will use the value or function to fill in any undefined fields before validation occurs
      defaultValue: ({ user }) => user.id,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'publishDate',
      type: 'date',
      admin: {
        position: 'sidebar',
        description: 'Posts will not be public until this date',
      },
      defaultValue: () => new Date(),
    },
  ],
};

export default Posts;
