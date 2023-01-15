import { createApp } from "vue";
import App from "./App.vue";
import './utils/require'
import "ant-design-vue/dist/antd.css";
import axios from "axios";
import Antd from "ant-design-vue";

import render from 'coder-vform-render'
import 'coder-vform-render/dist/style.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from './router'
import DevelopCompents from '../lib'


import designer from 'coder-vform-designer'
import 'coder-vform-designer/dist/style.css'

const app = createApp(App);
app.use(DevelopCompents)
    .use(designer)
    .use(Antd)
    .use(ElementPlus)
    .use(router)
    .use(render)

app.mount("#app");



