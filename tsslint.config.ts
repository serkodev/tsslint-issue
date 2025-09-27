import { createIgnorePlugin, defineConfig } from '@tsslint/config'
import { convertRules } from '@tsslint/eslint'
import packageJson from './package.json' with { type: 'json' }

export default defineConfig({
  plugins: [
    createIgnorePlugin('@tsslint-disable-next-line', true),
    createIgnorePlugin(['@tsslint-disable', '@tsslint-enable'], false),
    () => ({
      // rename @koddsson/tscompat/tscompat to tscompat/tscompat
      resolveRules(_fileName, rules) {
        rules['tscompat/tscompat'] = rules['@koddsson/tscompat/tscompat']
        delete rules['@koddsson/tscompat/tscompat']
        return rules
      },
    }),
  ],
  rules: await convertRules({
    '@koddsson/tscompat/tscompat': ['error', {
      browserslist: packageJson.browserslist,
    }],
  }),
})
