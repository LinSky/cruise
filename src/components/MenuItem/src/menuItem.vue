<template>
    <div class="tw_menu_item" :class="{'active': active}">
        <i :class="iconName"></i>
        <span>{{text}}</span>
    </div>
</template>

<script>
export default {
    name: 'tw-menu-item',
    props: {
        text: {
            type: String,
            default: ''
        },
        path: {
            type: String,
            default: '/'
        },
        active: {
            type: Boolean,
            default: false
        },
        iconName: {
            type: String,
            default: ''
        }
    },
    data(){
        return {
        }
    },
    created () {

    },
    methods:{

    }
}
</script>

<style lang="less" scoped>
.tw_menu_item{
    height: 45px; padding: 0 0 0 40px; line-height: 45px; color: #FFF;
    i{
        font-size: 20px; display: inline-block; padding-right: 10px;
    }
    &.active{
        background-color: #435466; color: #00B4CF;
    }
}
</style>
