
import { IScheam, addWidget, addAdvanceFields, addBasicFieldSchema } from "coder-vform-render";
const schemaFiles = import.meta.glob('./*.js', { eager: true, import: 'default' })



for (const path in schemaFiles) {
  if (path == "./containerMixin.js")
    continue;
  let element = schemaFiles[path] as IScheam;

  if (element.type == "picture-upload" || element.type == "file-upload") {

    addAdvanceFields(element);
  }
  else {
    addBasicFieldSchema(element);

  }
}
