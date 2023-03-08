import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'happy-dom',
    include: [`${__dirname}/**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}`],
  },
})
