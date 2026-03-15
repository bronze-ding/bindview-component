import BvLoading from "./components/Loading"
import BvDialog from "./components/Dialog"
import ImageView from "./components/ImageView"

import config from "../package.json"

console.log(`%c bindview-component %c v${config.version ? config.version : '❓🤔'} `,
  'background: #35495e; padding: 1px; border-radius: 3px 0 0 3px; color: #fff;',
  'background: #41b883; padding: 1px; border-radius: 0 3px 3px 0; color: #fff',
  '\n',
  'https://github.com/bronze-ding/bindview-component');

const components = {
  BvLoading,
  BvDialog,
}

// 插件导入
export default function Components(vm) {
  vm.components(components)
}

// F 结尾的组件需要函数调用，用户单独引入这些组件，而不需要引入整个组件库
//按需导入
export {
  BvLoading,
  BvDialog,
  ImageView as ImageViewF
}