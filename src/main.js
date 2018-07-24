// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/*基础CSS文件 base.less*/
import './assets/less/base.less'

/*公共CSS文件 common.less*/
import './assets/less/common.less'

/*自定义组件*/
import twui from './components'


Vue.config.productionTip = false

Vue.use(twui)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
