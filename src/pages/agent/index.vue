<template>
    <div class="agent_page">
        <div class="numbers">
            <div class="flex_item">
                <tw-number-card bgColor="#ff9a2a" name="Building" iconClass="icon-cog" number="3"></tw-number-card>
            </div>
            <div class="flex_item">
                <tw-number-card bgColor="#7fbc39" name="Idle" iconClass="icon-coffee" number="5"></tw-number-card>
            </div>
            <div class="flex_item">
                <div class="grate_num">
                    <div class="item" v-for="(item, index) in grates">
                        <span>{{item.name}}</span><br><em>{{item.number}}</em>
                    </div>
                </div>
            </div>
        </div>
        <div class="fliter">
            <div class="btns">
                <button type="button" class="active">All</button>
                <button type="button">Physical</button>
                <button type="button">Virtual</button>
            </div>
            <div class="search">
                <i class="icon-search"></i>
                <input type="text" name="" value="">
            </div>
            <div class="list_types">
                <i class="icon-th-card"></i>
                <i class="icon-th-list active"></i>
            </div>
        </div>
        <div class="list">
            <template v-for="(agent, index) in agents">
                <tw-list-item :agent="agent"></tw-list-item>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            grates: [
                {
                    name: 'ALL',
                    number: 8
                },
                {
                    name: 'PHYSICAL',
                    number: 4
                },
                {
                    name: 'VIRTUAL',
                    number: 4
                }
            ],
            agents: []
        }
    },
    watch:{
        agents: {
            handler: function () {
                console.log(12313133);
            },
            deep: true
        }
    },
    created () {
        this.getAgents()
    },
    methods: {
        clickHandler () {
            this.$popover({top: 100, left: 100, width: 50})
        },
        getAgents () {
            let vm = this
            vm.$http({
                method: 'get',
                url: 'http://localhost:3001/agents'
            }).then((data)=>{
                vm.agents = data.data
            })
        }
    }
}
</script>

<style lang="less" scoped>
.numbers{
    display: flex;
    .flex_item{
        flex: 1; margin-right: 30px;
        &:last-child{
            margin-right: 0;
        }
        .grate_num{
            height: 116px; background-color: #FFF; display: flex;
            .item{
                flex: 1; text-align: center;
                span{
                    line-height: 48px; font-size: 12px;
                }
                em{
                    font-size: 20px; line-height: 68px;
                }
            }
        }
    }
}
.fliter{
    height: 53px; margin-top: 15px; background-color: #FFF;
    .btns{
        float: left;
        button{
            float: left; border: none; border-bottom: 3px solid #FFF; line-height: 50px; padding: 0 30px; border-right: #efefef solid 1px; font-size: 14px;
            &.active{
                border-bottom: 3px solid #00b4cf;
            }
        }
    }
    .search{
        float: left; position: relative; width: 120px; height: 30px; background-color: #f3f3f3; border-top: #e1e4e6 solid 1px; border-left: #e1e4e6 solid 1px; margin: 10px 30px; padding: 0 10px 0 40px;
        i{
            position: absolute; top: 0; left: 0; line-height: 30px; width: 40px; text-align: center; font-size: 18px; color: #999;
        }
        input{
            background: none; border: none; width: 100%; height: 30px;
        }
    }
    .list_types{
        float: right; padding-right: 30px;
        i{
            display: inline-block; padding-left: 20px; font-size: 20px; color: #999; line-height: 53px;
            &.active{
                color: #00b4cf;
            }
        }
    }
}
.list{
    padding-top: 15px;
}
</style>
