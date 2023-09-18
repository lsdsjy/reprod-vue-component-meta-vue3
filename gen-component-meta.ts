import { resolve } from 'path'
import type { ComponentMeta, MetaCheckerOptions } from 'vue-component-meta'
import { createComponentMetaChecker } from 'vue-component-meta'

const checkerOptions: MetaCheckerOptions = {
  forceUseTs: true,
  schema: { ignore: ['MyIgnoredNestedProps'] },
  printer: { newLine: 1 },
}

const tsconfigChecker = createComponentMetaChecker(
  resolve(__dirname, 'tsconfig.app.json'),
  checkerOptions,
)
const components = [resolve(__dirname, 'src/components/HelloWorld.vue')]

components.forEach(componentPath => {
  console.log(componentPath)
  const meta = tsconfigChecker.getComponentMeta(componentPath)
  console.log(JSON.parse(JSON.stringify(meta)))
})
