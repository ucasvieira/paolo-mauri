import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { i18n } from '../i18n.config';
import { documentInternationalization } from '@sanity/document-internationalization';

const projectId = 'i8xgwx5l';
const dataset = 'production';

export default defineConfig({
  basePath: '/admin',
  name: 'paolo-mauri',
  title: 'paolo-mauri',
  projectId,
  dataset,
  plugins: [
    structureTool(), 
    visionTool(),
    documentInternationalization({
      supportedLanguages: i18n.languages,
      schemaTypes: ['gallery', 'podcast', 'article', 'geopolitic', 'defend', 'blog', 'nav', 'videoBanner', 'geopoliticNav'],
    }),
  ],
  schema: {
    types: schemaTypes,
  },
})
