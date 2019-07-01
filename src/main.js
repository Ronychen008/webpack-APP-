import Vue from "vue"
// 按需导入min-ui组件
import {Header} from 'mint-ui'
import 'mint-ui/lib/style.css'
import "./lib/css/mui.css"
Vue.component(Header.name,Header);
import app from "./app.vue"
window.onload=function () {
    var vm =new Vue({
        el:'#demo',
        data:{},
        render:c=>c(app)
    });
};
