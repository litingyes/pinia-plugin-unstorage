import { defineConfig } from 'vite-plus'

export default defineConfig({
    lint: {
        options: {
            typeAware: true,
            typeCheck: true,
        },
        plugins: ['eslint', 'typescript', 'unicorn', 'oxc', 'import', 'vue'],
    },
    fmt: {
        tabWidth: 4,
        singleQuote: true,
        semi: false,
    },
    staged: {
        '*': 'vp check --fix',
    },
})
