<template>
    <div class="tw_footer_bar" >
        <p>&copy;Copyright 2017 ThoughtWorks</p>
    </div>
</template>

<script>
export default {
    name: 'tw-footer-bar',
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
.tw_footer_bar{
    height: 40px; width: 100%; background-color: #FFF; box-shadow: rgba(0, 0, 0, .2) 0 0 4px; position: fixed; bottom: 0; left: 0;
    p{
        text-align: center; line-height: 40px;
    }
}
</style>
