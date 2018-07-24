import Vue from 'vue'
let PopoverConstructor = Vue.extend(require('./popover.vue').default);
let popovers = []

let getAnInstance = () => {
    if (popovers.length > 0) {
        let instance = popovers[0];
        popovers.splice(0, 1);
        return instance;
    }
    return new PopoverConstructor({
        el: document.createElement('div')
    });
};

let returnAnInstance = instance => {
    if (instance) {
        popovers.push(instance);
    }
};

let removeDom = event => {
    if (event.target.parentNode) {
        event.target.parentNode.removeChild(event.target);
    }
};

PopoverConstructor.prototype.close = function() {
      this.visible = false;
      this.$el.addEventListener('transitionend', removeDom);
      this.closed = true;
      returnAnInstance(this);
};

let Popover = (options = {}) => {
    let duration = options.duration || 3000
    let instance = getAnInstance();
    instance.closed = false;
    clearTimeout(instance.timer);
    instance.width = options.width
    instance.top = options.top
    instance.left = options.left

    document.body.appendChild(instance.$el);
    Vue.nextTick(function() {
        instance.visible = true;
        instance.$el.removeEventListener('transitionend', removeDom);
        window.document.addEventListener('click', (e) => {
            instance.close()
        }, false)
        // ~duration && (instance.timer = setTimeout(function() {
        //   if (instance.closed) return;
        //   instance.close();
        // }, duration));
    });
    return instance;
};


export default Popover;