<template>
    <div class="tw_header_bar" >
        <div class="mid">
            <div class="logo">
                <img src="@/assets/svg/logo.svg" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'tw-header-bar',
    props: {

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
.tw_header_bar{
    height: 40px; width: 100%; padding: 20px 0; background-color: #FFF; box-shadow: rgba(0, 0, 0, .2) 0 2px 4px; position: fixed; top: 0; left: 0; z-index: 999;
    .mid{
        width: 1200px; margin: auto;
    }
    .logo{
        width: 120px; height: 40px; margin: auto;
        img{
            width: 100%;
        }
    }
}
</style>
