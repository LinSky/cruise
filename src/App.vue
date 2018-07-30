<template>
    <div class="pager_box">
        <tw-header-bar></tw-header-bar>
        <div class="content">
            <div class="left">
                <tw-menu-item v-for="(menu, index) in menus" :key="index" :iconName="menu.iconName" :text="menu.text" :path="menu.path" :active="index === activeIndex"></tw-menu-item>
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
    name: 'App',
    data () {
        return {
            activeIndex: 1,
            menus: [
                {
                    path: '/dashboard',
                    text: 'DASHBOARD',
                    iconName: 'icon-dashboard'
                },
                {
                    path: '/agent',
                    text: 'AGENT',
                    iconName: 'icon-sitemap'
                },
                {
                    path: '/mycruise',
                    text: 'MY CRUISE',
                    iconName: 'icon-boat'
                },
                {
                    path: '/help',
                    text: 'HELP',
                    iconName: 'icon-life-bouy'
                }
            ]
        }
    },

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
