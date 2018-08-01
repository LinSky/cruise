<template>
    <div class="tw_list_item">
        <div class="logo">
            <img :src="logoUrl" alt="">
        </div>
        <div class="info">
            <h5>
                <i class="icon-desktop"></i>
                <strong>{{agent.name}} </strong>
                <em :style="'background-color:' + getStatusBg()">{{agent.status}}</em>
                <i class="icon-info"></i>
                <span>{{agent.ip}} </span>
                <i style="margin-left:20px;" class="icon-folder"></i>
                <span>{{agent.location}} </span>
            </h5>
            <div class="ctrls">
                <button type="button" v-pop="500"><i class="icon-plus"></i></button>
                <em class="tag" v-for="(tag, index) in agent.resources">{{tag}} <i class="icon-trash"></i></em>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'tw-list-item',
    props: {
        agent: {
            type: Object
        }
    },
    data(){
        return {
        }
    },
    computed: {
        logoUrl: function () {
            console.log(this.agent.os);
            return require('@/assets/images/' + this.agent.os + '.png')
        }
    },
    created () {

    },
    methods:{
        getStatusBg () {
            return this.agent.status === 'idle' ? '#7FBC39' : '#FF9A2A'
        }
    }
}
</script>

<style lang="less" scoped>
.tw_list_item{
    height: 80px; padding: 14px 30px 14px 110px; margin-bottom: 15px; background-color: #FFF; position: relative;
    .logo{
        width: 80px; height: 80px; position: absolute; top: 14px; left: 15px;
    }
    .info{
        h5{
            font-size: 14px; line-height: 24px;
            i,strong,em,span{
                display: inline-block; vertical-align: middle;
            }
            i{
                color: #999; font-size: 16px;
            }
            strong{
                color: #01869A;
            }
            em{
                height: 18px; color: #FFF; padding: 0 10px; margin: 0 20px; line-height: 18px;
            }
        }
        .ctrls{
            padding-top: 25px;
            button{
                width: 28px; height: 25px; background: #00b4af; border: none; color: #FFF; font-size: 14px; line-height: 28px; float: left;
                &:hover{
                    background-color: #01869a;
                }
            }
            em.tag{
                float: left; height: 25px; line-height: 25px; background-color: #f3f3f3; margin-left: 10px; padding: 0 10px;
                i{
                    font-size: 16px; display: inline-block; vertical-align: middle; height: 25px; line-height: 25px;
                }
                &:hover{
                    background-color: #e1e4e6; cursor: pointer;
                }
            }
        }
    }
}
</style>
