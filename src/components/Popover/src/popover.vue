<template>
    <transition name="fade">
        <div class="tw_popover" @click.stop="cancelBubbleHandler" :style="computeStyle()" v-if="visible">
            <p>Separte multiple resource name with commas</p>
            <input type="text" name="" value="" v-model="resourcesStr">
            <div class="btns">
                <button type="button" class="add" name="button" @click="addResourcesHandler">Add Resources</button>
                <button type="button" class="cancel" name="button" @click="cancelHandler">Cancel</button>
            </div>
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
        },
        addHandler: {
            type: Function
        }
    },
    data(){
        return {
            visible: false,
            resourcesStr: '',
        }
    },
    computed: {
        resources: function () {
            return this.agent.resources
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
        },
        addResourcesHandler () {
            let vm = this
            if (vm.resourcesStr.length > 0) {
                this.addHandler(vm.resourcesStr.split(','))
                this.close()
            }
        },
        cancelHandler () {
            this.close()
        }
    }
}
</script>

<style lang="less" scoped>
@import '~@/assets/less/lib.less';
.tw_popover{
    position: absolute; background-color: #FFF; border: @wathetBlue solid 1px; padding: 15px; box-sizing: border-box; box-shadow: 0 2px 3px rgba(0, 0, 0, .4);
    p{
        line-height: 32px; color: #666;
    }
    input{
        width: 100%; padding: 0 15px; box-sizing: border-box; height: 32px; border: #666 solid 1px; border-radius: 3px; color: #00b4cf;
    }
    .btns{
        padding-top: 20px;
        button{
            display: inline-block; height: 28px; border: none; color: #FFF; cursor: pointer; text-align: center; margin-right: 10px;
            &.add{
                width: 132px; background-color: #00b4cf;
            }
            &.cancel{
                width: 118px; background-color: #435466;
                &:hover{
                    background-color: #2d4054;
                }
            }
        }
    }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>
