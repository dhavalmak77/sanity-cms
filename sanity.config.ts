import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
	projectId: 'b4y63s7d',
	dataset: 'production',
	title: 'Simple Sanity Studio Development',
	apiVersion: '2024-03-26',
	basePath: '/admin',
	plugins: [deskTool()],
	schema: { types: schemas }
});

export default config;
