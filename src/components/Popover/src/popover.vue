<template>
    <transition name="fade">
        <div class="tw_popover" @click.stop="cancelBubbleHandler" :style="computeStyle()" v-if="visible">
            tw_popover
        </div>
    </transition>
</template>

<script>

export default {
    props: {
        width: {
            type: Number,
            default: 400
        },
        top: {
            type: Number,
            default: 0
        },
        left: {
            type: Number,
            default: 0
        }
    },
    data(){
        return {
            visible: false
        }
    },
    methods:{
        computeStyle () {
            let vm = this
            let style = {}
            style['width'] = vm.width + 'px'
            style['top'] = vm.top + 'px'
            style['left'] = vm.left + 'px'
            return style
        },
        show () {
            this.visible = true
        },
        cancelBubbleHandler (e) {
            e.cancelBubble = true
        }
    }
}
</script>

<style lang="less" scoped>
@import '~@/assets/less/lib.less';
.tw_popover{
    position: absolute; background-color: #FFF; border: @wathetBlue solid 1px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>
