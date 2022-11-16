import { App } from 'vue'
import render, { widgetManager } from 'coder-vform-render'
//自定义组件导入
import customerCompoents from './element-plus/index'



const installer = {
    install: (app: any) => {
        app.use(render);
        app.use(customerCompoents);
    }

}

export default installer