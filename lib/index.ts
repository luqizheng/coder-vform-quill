import { App } from 'vue'
import render, { widgetManager } from 'coder-vform-render'
//自定义组件导入
import customerCompoents, { schema } from './element-plus/index'



const installer = {
    install: (app: any) => {
        app.use(render);
        app.use(customerCompoents);

        schema.forEach(element => {

            if (element.type == "picture-upload" || element.type == "file-upload") {
                widgetManager.addAdvanceFields(element);
            }
            else {
                widgetManager.addBasicFieldSchema(element);
            }

        });
    }

}

export default installer