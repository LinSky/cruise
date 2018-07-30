<template>
    <div class="tw_number_card" :style="cardStyle">
        <i :class="iconClass"></i>
        <em>{{name}}</em>
        <strong>{{number}}</strong>
    </div>
</template>

<script>
export default {
    name: 'tw-number-card',
    props: {
        number: {
            type: [Number, String],
            default: 0
        },
        name: {
            type: String,
            default: ''
        },
        iconClass: {
            type: String,
            default: ''
        },
        bgColor: {
            type: String,
            default: '#999999'
        }
    },
    data(){
        return {
        }
    },
    computed: {
        cardStyle: function () {
            return 'background-color:' + this.bgColor
        }
    },
    created () {

    },
    methods:{

    }
}
</script>

<style lang="less" scoped>
.tw_number_card{
    height: 116px; position: relative; overflow: hidden;
    i{
        position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 144px; color: #FFF; opacity: .2; text-align: center;
    }
    em{
        position: absolute; top: 0; left: 20px; color: #FFF; font-size: 18px; font-weight: bold; line-height: 48px;
    }
    strong{
        position: absolute; bottom: 0; right: 20px; font-size: 48px; font-weight: 100; line-height: 96px; color: #FFF;
    }
}
</style>
