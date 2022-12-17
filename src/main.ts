import { createApp } from "vue";
import App from "./App.vue";
import './utils/require'
import "ant-design-vue/dist/antd.css";
import axios from "axios";
import Antd from "ant-design-vue";

import render from 'coder-vform-render'

//import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from './router'
import DevelopCompents from '../lib'




const app = createApp(App);
app.use(DevelopCompents, { path: 'http://localhost:5000', request: axios })
   
    .use(Antd)
   
    .use(router)
    .use(render)

    app.mount("#app");



