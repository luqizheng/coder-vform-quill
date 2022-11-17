
//自定义组件导入
import customerCompoents from './element-plus/index'

const installer = {
    install: (app: any) => {
        console.log('install element-plug-for asdf')
      
        customerCompoents(app)
    }

}

export default installer