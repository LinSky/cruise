import Vue from 'vue'
let directive = {
    name: 'pop',
    options: {
        inserted: function(el) {
            el.addEventListener('click', (e) => {
                if (!Vue.prototype.$popInstance) {
                    e.cancelBubble = true
                    let x = el.offsetLeft
                    let y = el.offsetTop
                    let h = el.offsetHeight
                    Vue.prototype.$popInstance = Vue.prototype.$popover({top: y+h, left: x, width: 500})
                }
                Vue.prototype.$popInstance.close()
            }, false)
        }
    }
}
export default directive
