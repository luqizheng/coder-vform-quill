
import { IScheam, AddWidget, widgetManager } from "coder-vform-render";
const schemaFiles = import.meta.glob('./*.js', { eager: true, import: 'default' })
const modules = import.meta.glob('./*.vue', { eager: true, import: 'default' })

for (const path in modules) {

  let comp = modules[path] as any;
  AddWidget(comp);
}

export default (app: any) => {

  for (const path in schemaFiles) {
    if (path == "./containerMixin.js")
      continue;
    let element = schemaFiles[path] as IScheam;

    if (element.type == "picture-upload" || element.type == "file-upload") {

      widgetManager.addAdvanceFields(element);
    }
    else {
      widgetManager.addBasicFieldSchema(element);

    }


  }
}