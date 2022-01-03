import {defineNuxtConfig} from 'nuxt3'

export default defineNuxtConfig({
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
    buildModules: [
        '@pinia/nuxt',
    ],
    meta: {
        title: 'Todo App',
        description: 'A simple todo app',
        keywords: 'todo, todo app, todo list, todo list app',

    },
});