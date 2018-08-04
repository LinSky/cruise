<template>
    <div class="pager_box">
        <tw-header-bar></tw-header-bar>
        <div class="left_bar">
            <div class="menus">
                <tw-menu-item v-for="(menu, index) in menus" :key="index" :iconName="menu.iconName" :text="menu.text" :path="menu.path" :active="index === activeIndex"></tw-menu-item>
            </div>
        </div>
        <div class="content">

                <router-view></router-view>

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
    created () {
    }
}
</script>

<style lang="less" scoped>
@import '~@/assets/less/lib.less';
.pager_box{
}
.left_bar{
    position: fixed; top: 80px; bottom: 40px; left: calc((100% - 1200px)/2); width: 250px; background-color: @deepGray;
}
.content{
    width: 1200px; height: 100%; padding: 95px 0 40px 270px; margin: auto; box-sizing: border-box;
}
</style>
