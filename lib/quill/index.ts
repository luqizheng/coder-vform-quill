export default {
    type: 'rich-editor',
    icon: 'rich-editor-field',
    formItemFlag: true,
    options: {
        name: '',
        label: '',
        labelAlign: '',
        placeholder: '',
        labelWidth: null,
        labelHidden: false,
        columnWidth: '200px',
        contentHeight: '200px',
        disabled: false,
        hidden: false,
        required: false,
        requiredHint: '',
        customRule: '',
        customRuleHint: '',
        //-------------------
        customClass: '',  //自定义css类名
        labelIconClass: null,
        labelIconPosition: 'rear',
        labelTooltip: null,
        minLength: null,
        maxLength: null,
        showWordLimit: false,
        //-------------------
        onCreated: '',
        onMounted: '',
        onValidate: '',
    },
}