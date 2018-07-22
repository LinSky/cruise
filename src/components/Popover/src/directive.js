import Popover from './popover.js'

let directive = {
    name: 'pop',
    options: {
        bind: function (el, binding, vnode) {
            el._popHandler = function popHandler (e) {
                e.cancelBubble = true
                const options = {
                    top: el.offsetTop + el.offsetHeight,
                    left: el.offsetLeft,
                    width: binding.value
                }
                this._tipInstance = Popover(options)
            }
            el.addEventListener('click', el._popHandler, false)
        }
    }
}
export default directive
