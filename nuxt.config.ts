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
        link: [
            {rel: 'preconnect', href: 'https://fonts.googleapis.com"'},
            {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true},
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap'},
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Raleway:wght@600&display=swap'
            },
        ],
    },
});