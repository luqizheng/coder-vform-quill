import { App } from 'vue'
import render from 'coder-vform-render'
//自定义组件导入
import customerCompoents, { schema as Schema } from './element-plus/index'


export const schema = Schema;

const installer = {
    install: (app: any) => {
        app.use(render);
        app.use(customerCompoents);
    }
}

export default installer