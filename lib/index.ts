import { App } from 'vue'
import render, { WidgetManager } from 'coder-vform-render'
//自定义组件导入
import customerCompoents, { schema } from './element-plus/index'
import widgetManager from 'coder-vform-render/dist/widgetManager';




const installer = {
    install: (app: any) => {
        app.use(render);
        app.use(customerCompoents);

        schema.forEach(element => {

            if (element.type == "picture-upload" || element.type == "file-upload") {
                WidgetManager.addAdvanceFields(element);
            }
            else {
                widgetManager.addBasicFieldSchema(element);
            }

        });
    }

}

export default installer