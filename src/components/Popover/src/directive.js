import Popover from './popover.js'

//获取元素的纵坐标
function getTop(e){
    var offset=e.offsetTop;
    if(e.offsetParent!=null) offset+=getTop(e.offsetParent);
    return offset;
}
//获取元素的横坐标
function getLeft(e){
    var offset=e.offsetLeft;
    if(e.offsetParent!=null) offset+=getLeft(e.offsetParent);
    return offset;
}

let directive = {
    name: 'pop',
    options: {
        bind: function (el, binding, vnode) {
            el._popHandler = function popHandler (e) {
                e.cancelBubble = true
                console.log(vnode);
                const options = {
                    top: getTop(el) + el.offsetHeight + 20,
                    left: getLeft(el)-20,
                    width: 500,
                    agent: binding.value
                }
                this._tipInstance = Popover(options)
            }
            el.addEventListener('click', el._popHandler, false)
        }
    }
}
export default directive
