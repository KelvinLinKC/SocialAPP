import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import user from './schemas/user'
import pin from './schemas/pin'
import comment from './schemas/comment'
import postedBy from './schemas/postedBy'
import save from './schemas/save'

export default defineConfig({
  name: 'default',
  title: 'SocialApp',

  projectId: 'x1fpxgro',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes.concat([
      user, pin, comment, postedBy, save
    ]),
  },
})
