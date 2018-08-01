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
                console.log(el.offsetX);
                const options = {
                    top: getTop(el) + el.offsetHeight,
                    left: getLeft(el),
                    width: binding.value
                }
                this._tipInstance = Popover(options)
            }
            el.addEventListener('click', el._popHandler, false)
        }
    }
}
export default directive
