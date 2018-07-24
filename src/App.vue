<template>
    <div class="pager_box">
        <tw-header-bar></tw-header-bar>
        <div class="content">
            <div class="left">

            </div>
            <div class="right">
                <router-view></router-view>
            </div>

        </div>
        <tw-footer-bar></tw-footer-bar>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style lang="less" scoped>
@import '~@/assets/less/lib.less';
.pager_box{
    height: 100%;
}
.content{
    width: 1200px; height: 100%; padding: 80px 0 40px; margin: auto; display: flex; box-sizing: border-box;
    .left{
        width: 250px; background-color: @deepGray;  min-height: 100%;
    }
    .right{
        flex: 1; padding: 20px;
    }
}
</style>
