import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions:['.vue','.js ','.ts']
  },
  build: {
    rollupOptions: {
        external: ['@nutui/nutui'], // 这里将lodash添加到external列表中，使其被外部化处理
        // 其他rollupOptions相关设置
    },
    // 其他build相关设置
},
  css: {
    preprocessorOptions: {
      scss: {
        // 两种方式都可以
        additionalData: '@use "@/style/global.scss";'
      }
    }
  },
})
