
//自定义组件导入

import { addAdvanceFields, addWidget } from 'coder-vform-render';
import quill from './quill/index'
import quillWidget from './quill/quill-widget.vue'
const installer = {
  install: (app: any) => {
    addWidget(quillWidget)
    addAdvanceFields(quill);
  }
}
export default installer