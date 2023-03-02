// import adapter from '@sveltejs/adapter-auto';
import adapterVercel from '@sveltejs/adapter-vercel';
import vitePreprocess from 'svelte-preprocess';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapterVercel()
	},
	preprocess: vitePreprocess()
};

export default config;