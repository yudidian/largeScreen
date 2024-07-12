import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default function createComponents() {
  return Components({
    dirs: [
      'src/components',
      'src/layouts/ui-kit',
    ],
    resolvers: [
      ElementPlusResolver({
        importStyle: 'sass',
      }),
    ],
    include: [/\.vue$/, /\.vue\?vue/, /\.tsx$/],
    dts: './src/types/components.d.ts',
  })
}
