
//自定义组件导入
import customerCompoents from './element-plus/index'
import { addWidget } from 'coder-vform-render';
const modules = import.meta.glob('./Element-plus/*.vue', { eager: true, import: 'default' })
for (const path in modules) {
  let comp = modules[path] as any;
  addWidget(comp);
}
const installer = {
  install: (app: any) => {
    customerCompoents(app)
  }
}
export default installer