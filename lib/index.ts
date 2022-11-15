import { App } from 'vue'
import render from 'coder-vform-render'
//自定义组件导入
import customerCompoents from './element-plus/index'

export { schema } from './element-plus/index'

const install = (app: any) => {
    app.use(render);
    app.use(customerCompoents);

}

export default {
    install
}
