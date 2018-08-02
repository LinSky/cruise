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
.list{
    padding-top: 15px;
}
</style>
