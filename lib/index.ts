
//自定义组件导入
import setup from './element-plus/index'
import { addWidget } from 'coder-vform-render';
const modules = import.meta.glob('./Element-plus/*.vue', { eager: true, import: 'default' })

const installer = {
  install: (app: any) => {
    setup();
    for (const path in modules) {
      let comp = modules[path] as any;
      addWidget(comp);
    }
  }
}
export default installer