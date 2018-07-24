import HeaderBar from './HeaderBar/'
import FooterBar from './FooterBar/'
import {Popover, PopDirective} from './Popover/'

const install = function (Vue, config = {}) {
    if (install.installed) return

    Vue.component(HeaderBar.name, HeaderBar)
    Vue.component(FooterBar.name, FooterBar)

    Vue.directive(PopDirective.name, PopDirective.options)
    Vue.$popover = Vue.prototype.$popover = Popover
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    HeaderBar,
    FooterBar,
    Popover,
    PopDirective
}
